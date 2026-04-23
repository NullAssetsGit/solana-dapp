import { useState, useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import SolanaWallet from './wallet.js'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()
  const [wallet, setWallet] = useState(new SolanaWallet())
  const [status, setStatus] = useState(t('status.standby'))
  const [amount, setAmount] = useState(0.369)
  const [address, setAddress] = useState('')
  const [connected, setConnected] = useState(false)
  const [walletDetected, setWalletDetected] = useState(false)

  const checkWallet = useCallback(async () => {
    const detected = wallet.detect()
    setWalletDetected(!!detected)
    if (!detected) {
      setStatus(t('status.nowallet'))
      setConnected(false)
    } else if (!connected) {
      setStatus(t('status.detected'))
    }
  }, [wallet, connected, t])

  const connect = async () => {
    try {
      setStatus(t('status.connecting'))
      const result = await wallet.connect()
      setAddress(result.publicKey)
      setConnected(true)
      setStatus(t('status.connected'))
    } catch (error) {
      setStatus(error.message)
    }
  }

  const burn = async () => {
    try {
      setStatus(t('status.signing'))
      const signature = await wallet.burn(amount)
      setStatus(`${t('status.success')} ${signature.slice(0, 20)}...`)
      window.open(`https://solscan.io/tx/${signature}`, '_blank')
    } catch (error) {
      setStatus(`${t('status.error')}: ${error.message}`)
    }
  }

  useEffect(() => {
    checkWallet()
    const interval = setInterval(checkWallet, 2000)
    return () => clearInterval(interval)
  }, [checkWallet])

  return (
    <div className="app">
      <h1>{t('title')}</h1>
      <div className="manifesto" dangerouslySetInnerHTML={{ __html: t('manifesto') }} />
      
      <div className="controls">
        <label className="amount-label">{t('amount')}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          min="0.01"
          step="0.001"
          className="amount"
        />
        <span className="sol">SOL</span>
      </div>

      <div className="buttons">
        {!connected ? (
          <button onClick={connect} disabled={!walletDetected} className="connect">
            {t('connect')}
          </button>
        ) : null}
        <button onClick={burn} disabled={!connected || amount < 0.01} className="burn">
          {t('burn')}
        </button>
      </div>

      <div className="status">{status}</div>
      
      {address && (
        <div className="wallet-info">
          <div>{t('address')}</div>
          <div className="address">{address.slice(0, 8)}...{address.slice(-8)}</div>
        </div>
      )}

<div className="lang">

  <button onClick={() => i18n.changeLanguage('en')} title="English">🇺🇸</button>  
  <button onClick={() => i18n.changeLanguage('ru')} title="Русский">🇷🇺</button>
  <button onClick={() => i18n.changeLanguage('de')} title="Deutsch">🇩🇪</button>
  <button onClick={() => i18n.changeLanguage('ua')} title="Українська">🇺🇦</button>
  <button onClick={() => i18n.changeLanguage('pl')} title="Polski">🇵🇱</button>
</div>
    </div>
  )
}

export default App