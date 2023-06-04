export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  name: string;
  outerClassName?: string;
  url?: string;
  onClick: (event: React.SyntheticEvent) => void;
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

export interface IDbFormFieldProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  label: string;
  type: string;
  errorMessage?: string;
}
