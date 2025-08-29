export type ButtonVariant = "primary" | "secondary" | "danger" | "outline";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}
