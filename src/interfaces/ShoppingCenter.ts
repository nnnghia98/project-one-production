export interface IProductItemProps {
  id: string;
  thumbnail?: string;
  name: string;
  cost: string;
  quantity?: number;
  isPopular?: boolean;
}

export interface IProductsProps {
  products: IProductItemProps[];
}

export interface IBenefitItemProps {
  benefit: string;
}

export interface ICartItemProps {
  id: number;
  imgSrc: string;
  name: string;
  cost: number;
  quantity: number;
}
