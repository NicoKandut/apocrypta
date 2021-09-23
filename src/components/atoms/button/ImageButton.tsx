import { MouseEventHandler } from "react"
import "./ImageButton.css"

type Props = { icon: string; title: string; onClick: MouseEventHandler }

export default function ImageButton({ icon, title, onClick }: Props) {
  return (
    <button className="btn-img" onClick={onClick} title={title}>
      <img src={icon} alt={title}></img>
    </button>
  )
}
