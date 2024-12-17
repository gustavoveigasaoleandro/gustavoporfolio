export interface TextAreaProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>; // Tipagem específica para textarea
}
