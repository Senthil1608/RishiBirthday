import { useTranslation } from 'react-i18next'

interface BirthdayCardProps {
  onClose: () => void
}

export function BirthdayCard({ onClose }: BirthdayCardProps) {
  const { t } = useTranslation()

  return (
    <div className="birthday-card-overlay" onClick={onClose}>
      <div className="birthday-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="card-content">
          <div className="card-header">
            <h2>🎂 {t('happyBirthday')} 🎂</h2>
            <div className="decorative-line"></div>
          </div>

          <div className="card-message">
            <p className="greeting">Dear Rishi,</p>

            <p className="message">
              On this special day, I want to celebrate not just another year of your life,
              but the incredible journey you've taken in the world of coding. You're not just
              a developer – you're a problem-solver, an innovator, and an inspiration to everyone
              around you.
            </p>

            <p className="message">
              May your code always compile on the first try, may your bugs be few and far between,
              and may your coffee never run out! Keep creating amazing things and inspiring others
              to follow their coding dreams.
            </p>

            <p className="closing">
              Wishing you an amazing year ahead filled with exciting projects,
              breakthrough innovations, and endless coding adventures!
            </p>

            <p className="signature">🎉 Happy Birthday! 🎉</p>
          </div>

          <div className="card-footer">
            <div className="coding-icons">
              <span>💻</span>
              <span>🚀</span>
              <span>⭐</span>
              <span>🎯</span>
              <span>🔥</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}