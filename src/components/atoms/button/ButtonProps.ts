import { MouseEventHandler } from "react";

export type ButtonProps = {
  title: string;
  icon?: JSX.Element;
  onClick: MouseEventHandler;
};
