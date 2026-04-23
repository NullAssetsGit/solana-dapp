import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: "NULL_ASSET",
          manifesto: "Money is noise. <strong>The Void is the signal.</strong> Capital is an illusion that shackles the mind. By burning, we release the energy of flow. <strong>66.6% → PERMANENTLY DESTROYED</strong> from blockchain. 33.3% → Void Protocol maintenance. This is not investment. This is <strong>liberation</strong>.",
          connect: "🔗 Connect Wallet",
          burn: "🔥 Initiate Sacrifice",
          status: {
            standby: "System standby...",
            nowallet: "Install Phantom, Backpack or Solflare",
            detected: "Solana wallet detected",
            connecting: "Connecting to Void...",
            connected: "✅ Connected to Void",
            signing: "Awaiting signature...",
            success: "✅ SACRIFICE ACCEPTED",
            error: "❌ Transaction failed",
            min: "Minimum 0.01 SOL required"
          },
          address: "Wallet Address",
          amount: "Amount (SOL)"
        }
      },
      ua: {
        translation: {
          title: "NULL_ASSET",
          manifesto: "Гроші — це шум. <strong>Пустота — це сигнал.</strong> Капітал — ілюзія, що сковує розум. Спалюючи, вивільняємо енергію потоку. <strong>66.6% → НАЗАВЖДИ ЗНИЩЕНО</strong> з блокчейну. 33.3% → підтримка Протоколу Пустоти. Це не інвестиція. Це <strong>звільнення</strong>.",
          connect: "🔗 Підключити гаманець",
          burn: "🔥 Принести жертву",
          status: {
            standby: "Система готова...",
            nowallet: "Встанови Phantom, Backpack або Solflare",
            detected: "Знайдено Solana гаманець",
            connecting: "Підключення до Пустоти...",
            connected: "✅ Підключено до Пустоти",
            signing: "Очікування підпису...",
            success: "✅ ЖЕРТВА ПРИЙНЯТА",
            error: "❌ Помилка транзакції",
            min: "Мінімум 0.01 SOL"
          },
          address: "Адреса гаманця",
          amount: "Сума (SOL)"
        }
      },
      ru: {
        translation: {
          title: "NULL_ASSET",
          manifesto: "Деньги — шум. <strong>Пустота — сигнал.</strong> Капитал — иллюзия, сковывающая разум. Сжигая, высвобождаем энергию потока. <strong>66.6% → НАВСЕГДА УНИЧТОЖЕНО</strong> из блокчейна. 33.3% → поддержка Протокола Пустоты. Не инвестиция. <strong>Освобождение</strong>.",
          connect: "🔗 Подключить кошелек",
          burn: "🔥 Принести жертву",
          status: {
            standby: "Система готова...",
            nowallet: "Установи Phantom, Backpack или Solflare",
            detected: "Обнаружен Solana кошелек",
            connecting: "Подключение к Пустоте...",
            connected: "✅ Подключено к Пустоте",
            signing: "Ожидание подписи...",
            success: "✅ ЖЕРТВА ПРИНЯТА",
            error: "❌ Ошибка транзакции",
            min: "Минимум 0.01 SOL"
          },
          address: "Адрес кошелька",
          amount: "Сумма (SOL)"
        }
      },
      de: {
        translation: {
          title: "NULL_ASSET",
          manifesto: "Geld ist Lärm. <strong>Die Leere ist das Signal.</strong> Kapital ist eine Illusion, die den Geist fesselt. Durch Verbrennen setzen wir den Energiefluss frei. <strong>66,6% → FÜR IMMER VERNICHTET</strong> aus der Blockchain. 33,3% → Void-Protokoll-Wartung. Keine Investition. <strong>Befreiung</strong>.",
          connect: "🔗 Wallet verbinden",
          burn: "🔥 Opfer darbringen",
          status: {
            standby: "System bereit...",
            nowallet: "Installiere Phantom, Backpack oder Solflare",
            detected: "Solana-Wallet erkannt",
            connecting: "Verbinde mit Leere...",
            connected: "✅ Mit Leere verbunden",
            signing: "Warte auf Signatur...",
            success: "✅ OPFER ANgenommen",
            error: "❌ Transaktion fehlgeschlagen",
            min: "Mindestens 0,01 SOL"
          },
          address: "Wallet-Adresse",
          amount: "Betrag (SOL)"
        }
      },
      pl: {
        translation: {
          title: "NULL_ASSET",
          manifesto: "Pieniądze to hałas. <strong>Pustka to sygnał.</strong> Kapitał to iluzja krępująca umysł. Spalając uwalniamy energię przepływu. <strong>66,6% → NA ZAWSZE ZNISZCZONE</strong> z blockchaina. 33,3% → utrzymanie Protokołu Pustki. Nie inwestycja. <strong>Wyzwolenie</strong>.",
          connect: "🔗 Połącz portfel",
          burn: "🔥 Złóż ofiarę",
          status: {
            standby: "System gotowy...",
            nowallet: "Zainstaluj Phantom, Backpack lub Solflare",
            detected: "Wykryto portfel Solana",
            connecting: "Łączenie z Pustką...",
            connected: "✅ Połączono z Pustką",
            signing: "Oczekiwanie na podpis...",
            success: "✅ OFIARA PRZYJĘTA",
            error: "❌ Błąd transakcji",
            min: "Minimum 0,01 SOL"
          },
          address: "Adres portfela",
          amount: "Kwota (SOL)"
        }
      }
    },
    lng: navigator.language.split('-')[0] === 'uk' ? 'ua' : 
         navigator.language.split('-')[0] === 'pl' ? 'pl' : 
         navigator.language.split('-')[0] === 'de' ? 'de' : 
         navigator.language.split('-')[0] === 'ru' ? 'ru' : 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    }
  })

export default i18n