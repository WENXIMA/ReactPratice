import {ReactComponent as ShoppingIcon} from '../../asset/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';
import './cart-icon.styles.scss';

const CartIcon = () => {
    const {isCaption, setIsCaption,cartCount} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCaption(!isCaption);
    return(
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen}/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;