export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type"> {
  children?: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
}
