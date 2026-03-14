import { useEffect, useState } from 'react'

interface Heart {
  id: number
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const createHeart = () => {
      const heart: Heart = {
        id: Date.now() + Math.random(),
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.5
      }
      setHearts(prev => [...prev, heart])
    }

    const interval = setInterval(createHeart, 2000)

    // Animate hearts
    const animateHearts = () => {
      setHearts(prev => prev
        .map(heart => ({
          ...heart,
          y: heart.y - heart.speed,
          opacity: heart.opacity - 0.005
        }))
        .filter(heart => heart.y > -50 && heart.opacity > 0)
      )
    }

    const animationInterval = setInterval(animateHearts, 50)

    return () => {
      clearInterval(interval)
      clearInterval(animationInterval)
    }
  }, [])

  return (
    <div className="floating-hearts">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}