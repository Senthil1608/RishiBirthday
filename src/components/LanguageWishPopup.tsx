import { useState } from 'react'
import i18n from '../i18n'

interface LanguageWishPopupProps {
  onClose: () => void
}

export function LanguageWishPopup({ onClose }: LanguageWishPopupProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

  const languages = [
    { code: 'en', name: 'English', wish: 'Wish you' },
    { code: 'fr', name: 'Français', wish: 'Je te souhaite' },
    { code: 'es', name: 'Español', wish: 'Te deseo' },
    { code: 'de', name: 'Deutsch', wish: 'Ich wünsche dir' },
    { code: 'it', name: 'Italiano', wish: 'Ti auguro' },
    { code: 'pt', name: 'Português', wish: 'Desejo-te' },
    { code: 'ru', name: 'Русский', wish: 'Желаю тебе' },
    { code: 'zh', name: '中文', wish: '祝你' },
    { code: 'ja', name: '日本語', wish: 'お祝いします' },
    { code: 'ko', name: '한국어', wish: '축하합니다' },
    { code: 'ar', name: 'العربية', wish: 'أتمنى لك' },
    { code: 'hi', name: 'हिन्दी', wish: 'आपको शुभकामनाएं' },
    { code: 'nl', name: 'Nederlands', wish: 'Ik wens je' },
    { code: 'sv', name: 'Svenska', wish: 'Jag önskar dig' },
    { code: 'da', name: 'Dansk', wish: 'Jeg ønsker dig' },
    { code: 'no', name: 'Norsk', wish: 'Jeg ønsker deg' },
    { code: 'fi', name: 'Suomi', wish: 'Toivotan sinulle' },
    { code: 'tr', name: 'Türkçe', wish: 'Sana dilerim' },
  ]

  const handleLanguageSelect = (langCode: string) => {
    i18n.changeLanguage(langCode)
    setSelectedLanguage(langCode)
  }

  const handleBack = () => {
    setSelectedLanguage(null)
  }

  if (selectedLanguage) {
    return (
      <div className="language-popup-overlay" onClick={onClose}>
        <div className="language-popup" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>×</button>
          <button className="back-btn" onClick={handleBack}>←</button>

          <div className="wish-display">
            <div className="selected-language-info">
              <h3>{languages.find(lang => lang.code === selectedLanguage)?.name}</h3>
            </div>
            <div className="birthday-wish">
              <h1>{i18n.t('happyBirthday', { lng: selectedLanguage })}</h1>
            </div>
            <div className="celebration-emojis">
              <span>🎉</span>
              <span>🎂</span>
              <span>🎈</span>
              <span>🎊</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="language-popup-overlay" onClick={onClose}>
      <div className="language-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="popup-header">
          <h2>🌍 Choose Your Language</h2>
          <p>Select a language to see the birthday wish</p>
        </div>

        <div className="language-grid">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="language-btn"
              onClick={() => handleLanguageSelect(lang.code)}
            >
              <span className="lang-name">{lang.name}</span>
              <span className="lang-wish">{lang.wish}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}