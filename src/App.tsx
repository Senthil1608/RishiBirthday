import './App.css'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { detectBrowserLanguage } from './utils/changeLanguage'
import { RishiPhoto } from './components/RishiPhoto'
import { BirthdayCard } from './components/BirthdayCard'
import { CodingAnimation } from './components/CodingAnimation'
import { FloatingHearts } from './components/FloatingHearts'
import { ConfettiPopup } from './components/ConfettiPopup'
import { LanguageWishPopup } from './components/LanguageWishPopup'

function App() {
  const { t, i18n } = useTranslation()
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })
  const [showConfetti, setShowConfetti] = useState(false)
  const [showCard, setShowCard] = useState(false)
  const [showLanguagePopup, setShowLanguagePopup] = useState(false)

  const browserLang = detectBrowserLanguage()

  // Automatically set browser language on component mount
  useEffect(() => {
    const currentLang = i18n.language
    if (currentLang !== browserLang) {
      i18n.changeLanguage(browserLang)
    }
  }, [browserLang, i18n])

  // Apply theme to body
  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme'
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const toggleCard = () => {
    setShowCard(!showCard)
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <FloatingHearts />
      <CodingAnimation />

      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="main-title">🎉 {t('happyBirthday')} 🎉</h1>
          <div className="controls">
            <button
              onClick={toggleDarkMode}
              className="theme-toggle"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            <button
              onClick={() => setShowLanguagePopup(true)}
              className="globe-btn"
              title="Choose Language"
            >
              🌍
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <div className="hero-text">
            <h2>Happy Birthday, Rishi! 🎂</h2>
            <p className="subtitle">The coding wizard who turns coffee into code! ☕➡️💻</p>
            <div className="action-buttons">
              <button onClick={triggerConfetti} className="celebrate-btn">
                🎊 Celebrate!
              </button>
              <button onClick={toggleCard} className="card-btn">
                💌 Birthday Card
              </button>
            </div>
          </div>

          <RishiPhoto />
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Code Master</h3>
            <p>You turn complex problems into elegant solutions</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Innovation</h3>
            <p>Always pushing boundaries and learning new technologies</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Problem Solver</h3>
            <p>Your debugging skills are legendary!</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌟</div>
            <h3>Inspiration</h3>
            <p>Motivating others to pursue their coding dreams</p>
          </div>
        </div>
      </main>

      {/* Popups */}
      {showConfetti && <ConfettiPopup />}
      {showCard && <BirthdayCard onClose={toggleCard} />}
      {showLanguagePopup && <LanguageWishPopup onClose={() => setShowLanguagePopup(false)} />}
    </div>
  )
}

export default App
