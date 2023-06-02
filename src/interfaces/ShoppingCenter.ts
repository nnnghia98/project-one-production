export interface IProductItemProps {
  thumbnail: string;
  name: string;
  cost: number;
  onClick?: () => void;
}

export interface IBenefitItemProps {
  benefit: string;
}

export interface ICartItemProps {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
  quantity: number;
}
