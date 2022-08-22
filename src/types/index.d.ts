export interface MerchantInfo {
  discounts: Discount[];
  items: Record<string, Item[]>;
  marchantName: string;
  minimumOrderPrice: number;
}

export interface Discount {
  discountRate: number;
  id: string;
  name: string;
}

export interface Item {
  categoryId: string;
  categoryName: string;
  id: string;
  name: string;
  price: number;
}
