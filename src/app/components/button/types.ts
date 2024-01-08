export interface IButton {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'outlined' | 'filled';
}
