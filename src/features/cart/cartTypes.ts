export interface cartItem {
	id: string;
	title: string;
	price: number;
	img: string;
	amount: number;
}

export interface CartState {
  cartItems: cartItem[];
  amount: number;
  price: number;
}
