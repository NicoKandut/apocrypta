import { useEffect, useState } from "react"
import "./Header.css"

const marchen = [
  "\u{11C70}",
  "\u{11C71}",
  "\u{11C72}",
  "\u{11C73}",
  "\u{11C74}",
  "\u{11C75}",
  "\u{11C76}",
  "\u{11C77}",
  "\u{11C78}",
  "\u{11C79}",
]

const realTitle = "Apocrypta"

const randomInRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)
const randomMarchen = () => marchen[randomInRange(0, marchen.length)]

export default function Header() {
  const [title, setTitle] = useState(new Array(9).fill("").map(randomMarchen))
  const [solvedIdx, setSolvedIdx] = useState(0)

  useEffect(() => {
    const handle = setInterval(() => {
      const newTitle = []
      setSolvedIdx(solvedIdx + 1)
      for (let i = 0; i < title.length; i++) {
        if (i < solvedIdx) {
          newTitle.push(realTitle[i])
        } else {
          newTitle.push(randomMarchen())
        }
      }

      setTitle(newTitle)

      if (solvedIdx === title.length) {
        clearInterval(handle)
      }
    }, 100)

    return () => clearInterval(handle)
  })

  return (
    <header className="app-header">
      <h1 className="app-title">{title.join(" ")}</h1>
    </header>
  )
}
