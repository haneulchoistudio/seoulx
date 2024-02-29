type DataStructure<DataInteface extends object> = {
  _id: number;
  data: DataInteface;
};

// SIZE OPTIONS
export type ProductSizeOption = [6, 12, 20][number];

export interface IProduct {
  name: string;
  short: string;
  basePrice: number;
  sizes: ProductSizeOption[];
  availability: Record<ProductSizeOption, number>;
  images?: string[];
}

export type Product = DataStructure<IProduct>;
