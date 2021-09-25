import { useEffect, useState } from "react"
import { alphabet } from "../../../ciphers/utils/alphabet"
import "./Header.css"

const realTitle = "Apocrypta"

const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)
const randomLetter = () => alphabet[randomInRange(0, alphabet.length)] as string

export default function Header() {
  const [title, setTitle] = useState(
    new Array(realTitle.length).fill("").map(randomLetter)
  )
  const [solvedIdx, setSolvedIdx] = useState(0)

  useEffect(() => {
    const handle = setInterval(() => {
      const newTitle = []
      setSolvedIdx(solvedIdx + 0.1)
      for (let i = 0; i < title.length; i++) {
        if (i < solvedIdx) {
          newTitle.push(realTitle[i])
        } else {
          newTitle.push(randomLetter())
        }
      }

      setTitle(newTitle)

      if (solvedIdx === title.length) {
        clearInterval(handle)
      }
    }, 500 / (realTitle.length * 10))

    return () => clearInterval(handle)
  })

  return (
    <header className="app-header">
      <h1 className="app-title">
        {title.map((letter, index) => (
          <span key={index} className="app-title-letter">
            {letter}
          </span>
        ))}
      </h1>
    </header>
  )
}
