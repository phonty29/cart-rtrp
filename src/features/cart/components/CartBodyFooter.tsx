import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectCartState, clearItems } from '../cartSlice';
import { cartItem, CartState } from '../cartTypes';
import classes from '../Cart.module.css';

const CartBodyFooter = () => {
	const dispatch = useAppDispatch();
	const { price } = useAppSelector(selectCartState);
	const clearCart = () => {
		dispatch(clearItems());
	};

	return (
		<footer>
			<hr/>
			<div className={classes.cartTotal}>
				<h4>total <span>$ {price}</span></h4>
			</div>
			<button className={`${classes.btn} ${classes.clearBtn}`} onClick={clearCart}>clear cart</button>
		</footer>
	);
}

export default CartBodyFooter;