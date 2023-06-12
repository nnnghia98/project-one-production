import { ICountry } from "./api";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  name: string;
  outerClassName?: string;
  url?: string;
  onClick?: (event: React.SyntheticEvent) => void;
}

export interface ICheckboxProps {
  htmlName: string;
  title: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export interface IRadioProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  changed: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  isSelected: boolean;
  label: string;
  value: string;
}

export interface IXInputFieldProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder?: string;
  type?: string;
  required?: boolean;
  onchange?: string;
  invalid?: string;
  errormessage?: string;
}

export interface ICustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  outerClassName?: string;
  errorMessage?: string;
}

export interface IDropdownProps {
  name: string;
  data?: Array<any>;
  defaultValue?: string | number;
  errorMessage?: string;
  selectedItem?: ICountry;
  setSelectedItem: React.Dispatch<React.SetStateAction<ICountry | undefined>>;
}

export interface IXDropdownFieldProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title?: string;
  data?: string;
}

export interface IRangeSliderProps {
  step: number;
  min?: number;
  max?: number;
}
