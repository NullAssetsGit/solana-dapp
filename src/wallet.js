import { Connection, PublicKey, LAMPORTS_PER_SOL, Transaction, SystemProgram, clusterApiUrl } from '@solana/web3.js'

const CONFIG = {
  OPERATOR: '5T3ynidN1S4sHGTWF3RQ6NVTFgvMznkVJjZBfvcQPnrC',
  BURN: '11111111111111111111111111111111',
  MIN_AMOUNT: 0.01
}

export class SolanaWallet {
  constructor() {
    this.wallet = null
    this.publicKey = null
    this.connected = false
    this.connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed')
  }

  detect() {
    const wallets = [
      window.phantom?.solana,
      window.solflare,
      window.Backpack?.solana
    ]
    return wallets.find(Boolean)
  }

  async connect() {
    try {
      this.wallet = this.detect()
      if (!this.wallet) throw new Error('No wallet found')
      
      await this.wallet.connect()
      this.publicKey = this.wallet.publicKey
      this.connected = true
      return { publicKey: this.publicKey.toString() }
    } catch (error) {
      throw new Error(`Connection failed: ${error.message}`)
    }
  }

  async burn(amount) {
    if (!this.connected || !this.publicKey) throw new Error('Not connected')
    if (amount < CONFIG.MIN_AMOUNT) throw new Error('Amount too low')

    const lamports = Math.floor(amount * LAMPORTS_PER_SOL)
    const burnAmount = Math.floor(lamports * 0.666)
    const opAmount = lamports - burnAmount

    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: this.publicKey,
        toPubkey: new PublicKey(CONFIG.BURN),
        lamports: burnAmount
      }),
      SystemProgram.transfer({
        fromPubkey: this.publicKey,
        toPubkey: new PublicKey(CONFIG.OPERATOR),
        lamports: opAmount
      })
    )

    const { blockhash } = await this.connection.getLatestBlockhash()
    tx.recentBlockhash = blockhash
    tx.feePayer = this.publicKey

    const { signature } = await this.wallet.signAndSendTransaction(tx)
    return signature
  }
}

export default SolanaWallet