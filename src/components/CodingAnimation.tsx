import { useEffect, useState, useMemo } from 'react'

export function CodingAnimation() {
  const codeSnippets = useMemo(() => [
    'function happyBirthday(name) {',
    '  console.log(`Happy Birthday ${name}! 🎉`);',
    '  return "🎂🍰🎈";',
    '}',
    '',
    'const rishi = {',
    '  skills: ["JavaScript", "React", "Node.js"],',
    '  passion: "coding",',
    '  birthday: true',
    '};',
    '',
    '// Keep coding and stay awesome! 🚀'
  ], [])

  const [code, setCode] = useState('')

  useEffect(() => {
    let currentLine = 0
    let currentChar = 0

    const typeCode = () => {
      if (currentLine < codeSnippets.length) {
        if (currentChar < codeSnippets[currentLine].length) {
          setCode(prev => prev + codeSnippets[currentLine][currentChar])
          currentChar++
        } else {
          setCode(prev => prev + '\n')
          currentLine++
          currentChar = 0
        }
        setTimeout(typeCode, 100)
      }
    }

    const timer = setTimeout(typeCode, 2000)
    return () => clearTimeout(timer)
  }, [codeSnippets])

  return (
    <div className="coding-animation">
      <div className="code-window">
        <div className="code-header">
          <div className="window-controls">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>
          <span className="filename">birthday.js</span>
        </div>
        <div className="code-content">
          <pre>
            <code>{code}</code>
            <span className="cursor">|</span>
          </pre>
        </div>
      </div>
    </div>
  )
}