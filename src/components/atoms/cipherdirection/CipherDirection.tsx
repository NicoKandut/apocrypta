import { CipherDirection as Direction } from "../../../ciphers/types/CipherDirection"
import "./CipherDirection.css"

type Props = {
  direction: Direction
  onChange: (newDirection: Direction) => void
}

export default function CipherDirection({ direction, onChange }: Props) {
  return (
    <button
      className={`cipherdirection ${direction}`}
      onClick={() => onChange(direction === "decode" ? "encode" : "decode")}
    >
      {direction === "decode" ? "dec" : "enc"}
    </button>
  )
}
