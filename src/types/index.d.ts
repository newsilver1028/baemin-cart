export interface MerchantInfoResponse {
  discounts: Discount[];
  items: Item[];
  merchant_name: string;
  minimum_order_price: number;
}

export interface Discount {
  discount_rate: number;
  id: string;
  name: string;
}

export interface Item {
  category_id: string;
  category_name: string;
  id: string;
  name: string;
  price: number;
}
