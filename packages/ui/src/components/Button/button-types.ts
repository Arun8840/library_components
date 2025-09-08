export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger"
  | "outline"
  | "none";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}
