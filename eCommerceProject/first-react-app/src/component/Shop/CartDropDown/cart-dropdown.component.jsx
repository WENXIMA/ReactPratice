import './cart-dropdown.styles.scss';
import Button from '../../../UI/Button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';
import CartItem from '../CartItem/cart-item.component';
import { Link } from "react-router-dom";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => 
                    <CartItem key={item.id} cartItem={item} />
                )}
                </div>

            <Link to='/checkout'><Button>Go to CheckOut</Button></Link>
        
        </div>
    )
}

export default CartDropdown;