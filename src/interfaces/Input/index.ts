export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
}
