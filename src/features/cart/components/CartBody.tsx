import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { deleteItem, selectCartState } from '../cartSlice';
import { cartItem, CartState } from '../cartTypes';
import { cartAPI } from '../cartAPI';
import CartItem from './CartItem';
import CartBodyFooter from './CartBodyFooter';
import classes from '../Cart.module.css';

const CartBody = () => {
	const dispatch = useAppDispatch();
	const {  cartItems } = useAppSelector(selectCartState);
	useEffect(() => {
		dispatch(cartAPI());
	}, []);
	
	return (
		<section className={classes.cart}>
			<header>
				<h2>your bag</h2>
			</header>
			<div>
				{cartItems.map((item, index, array) => <CartItem key={item.id} item={item}/>)}
			</div>
			<CartBodyFooter/>
		</section>
	);
}

export default CartBody;
