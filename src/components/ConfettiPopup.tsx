import { useEffect, useState, useRef, useCallback, useMemo } from 'react'

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  size: number
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
}

export function ConfettiPopup() {
  const animationRef = useRef<number | undefined>(undefined)
  const colors = useMemo(() => ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe'], [])

  const [confetti, setConfetti] = useState<ConfettiPiece[]>(() => {
    const pieces: ConfettiPiece[] = []
    for (let i = 0; i < 100; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 6,
        speedY: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      })
    }
    return pieces
  })

  const animateConfetti = useCallback(() => {
    setConfetti(prev => prev
      .map(piece => ({
        ...piece,
        x: piece.x + piece.speedX,
        y: piece.y + piece.speedY,
        speedY: piece.speedY + 0.1, // gravity
        rotation: piece.rotation + piece.rotationSpeed
      }))
      .filter(piece => piece.y < window.innerHeight + 50)
    )
  }, [])

  useEffect(() => {
    animationRef.current = setInterval(animateConfetti, 16) // ~60fps

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current)
      }
    }
  }, [animateConfetti])

  return (
    <div className="confetti-popup">
      {confetti.map(piece => (
        <div
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            backgroundColor: piece.color,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            transform: `rotate(${piece.rotation}deg)`
          }}
        />
      ))}
    </div>
  )
}