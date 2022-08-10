import axios from 'axios';
import { fetchItems } from './cartSlice';
import { cartItem } from './cartTypes'; 
import { AppDispatch } from '../../app/store';

export const cartAPI = () => {
	return async function(dispatch: AppDispatch) {
		try { 
			let response = await axios.get('https://course-api.com/react-useReducer-cart-project');
			let cartItems: cartItem[] = response.data.map((item: cartItem, index: number, array: cartItem[]) => ({...item, price: Number(item.price)}));
			dispatch(fetchItems(cartItems));  		
		} catch (error) {
			console.error(error);
		}
	}
};


