export interface MerchantInfo {
  discounts: Discount[];
  items: Record<string, Item[]>;
  merchantName: string;
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

export interface CartState {
  name: string;
  price: number;
  quantity: number;
  priceByQuantity: number;
}
