import { FC } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { 
	addItem, 
	removeItem, 
	deleteItem 
} from '../cartSlice';
import classes from '../Cart.module.css';
import { cartItem } from '../cartTypes';

interface CartItemProps {
	key: string | number;
	item: cartItem;
}	

const CartItem: FC<CartItemProps> = ({item}) => {
	const dispatch = useAppDispatch();
	const increaseAmount = () => {
		dispatch(addItem(item));
	};
	const decreaseAmount = () => {
		 item.amount == 1 ? dispatch(deleteItem(item)) : dispatch(removeItem(item));
	};	

	return (
		<article className={classes.cartItem}>
			<img src={item.img} alt={item.title}/>
			<div>
				<h4>{item.title}</h4>
				<h4 className={classes.itemPrice}>${item.price}</h4>
				<button className={classes.removeBtn}>remove</button>
			</div>
			<div>
				<button className={classes.amountBtn} onClick={increaseAmount}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path></svg>
				</button>
				<p className={classes.amount}>{item.amount}</p>
				<button className={classes.amountBtn} onClick={decreaseAmount}>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>
				</button>
			</div>
		</article>
	);
}

export default CartItem;
