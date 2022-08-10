import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { cartItem, CartState } from './cartTypes';

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  price: 0
};

function returnIncreasedItem(item: cartItem, payloadItem: cartItem): cartItem {
  if (item.id == payloadItem.id)
    return {...item, amount: item.amount + 1};
  return item;
} 

function returnDecreasedItem(item: cartItem, payloadItem: cartItem): cartItem {
  if (item.id == payloadItem.id)
    return {...item, amount: item.amount - 1};
  return item;
} 

function getTwoDigits(num: number): number {
  return parseFloat(num.toFixed(2));
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    fetchItems: (state: CartState, action: PayloadAction<Array<cartItem>>) => {
      state.cartItems = action.payload;
      state.amount = action.payload.length;
      state.price = action.payload.map((cart) => cart.price).reduce((total, num) => total + num, 0);
    },
    addItem: (state: CartState, action: PayloadAction<cartItem>) => {
      state.cartItems = state.cartItems.map((cartItem, index, array) => returnIncreasedItem(cartItem, action.payload));
      state.amount = state.amount + 1;
      state.price = getTwoDigits(state.price + action.payload.price);
    },
    removeItem: (state: CartState, action: PayloadAction<cartItem>) => {
      state.cartItems = state.cartItems.map((cartItem, index, array) => returnDecreasedItem(cartItem, action.payload));
      state.amount = state.amount - 1;
      state.price = getTwoDigits(state.price - action.payload.price);
    },
    deleteItem: (state: CartState, action: PayloadAction<cartItem>) => {
      state.cartItems = state.cartItems.filter((cartItem, index, array) => cartItem.id != action.payload.id);
      state.amount = state.amount - 1;
      state.price = getTwoDigits(state.price - action.payload.price);
    },
    clearItems: (state: CartState) => {
      state.cartItems = [];
      state.amount = 0;
      state.price = 0;
    }
  }
});
export const { fetchItems, addItem, removeItem, deleteItem, clearItems } = cartSlice.actions;

export const selectCartState = (state: RootState) => state.cart;

export default cartSlice.reducer;


