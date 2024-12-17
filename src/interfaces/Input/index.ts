export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Evento de onChange opcional
}
