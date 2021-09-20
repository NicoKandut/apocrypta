import { ButtonProps } from "./ButtonProps";
import "./PrimaryButton.css";

export const PrimaryButton = ({ title, icon, onClick }: ButtonProps) => (
  <button onClick={onClick} className="btn-primary">
    {Boolean(icon) ? (
      <>
        {icon} <span>{title}</span>
      </>
    ) : (
      title
    )}
  </button>
);
