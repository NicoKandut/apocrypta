import { PropsWithChildren } from "react"
import "./Modal.css"

interface Props {
  title: string
  onClose: () => void
}

export default function Modal({
  title,
  onClose,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-body" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </div>
  )
}
