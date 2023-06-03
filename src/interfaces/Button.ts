export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  name: string;
  outerClassName?: string;
  url?: string;
  onClick: () => void;
}
