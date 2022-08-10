import { useAppSelector } from '../../../app/hooks';
import { selectCartState } from '../cartSlice';
import { cartItem, CartState } from '../cartTypes';
import classes from '../Cart.module.css';

const Navbar = () => {
  const { amount } = useAppSelector(selectCartState); 

  return (
    <nav>
    	<div className={classes.navCenter}>
    		<h3>Cart</h3>
    		<div className={classes.navContainer}>
    			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"></path></svg>
    			<div className={classes.amountContainer}>
    				<p className={classes.totalAmount}>{amount}</p>
    			</div>
    		</div>
    	</div>
    </nav>
  );
}

export default Navbar;