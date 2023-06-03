export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  name: string;
  outerClassName?: string;
  url?: string;
  onClick: () => void;
}

export interface ICheckboxProps {
  htmlName: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export interface IRadioProps extends React.HTMLProps<HTMLButtonElement> {
  changed: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  isSelected: boolean;
  label: string;
  value: string;
}
