
import { useContext } from 'react';
import Button from '../../../UI/Button/button.component';
import { CartContext } from '../../Context/cart.context';

import './cart-out.styles.scss';

const CartOut = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;
  const {addItemToCart,removeItemFromCart,cartTotal,deleteItemFromCart} = useContext(CartContext);
  const minusItem = () => {
    removeItemFromCart(cartItem);
  };

  const addItem = () => {
    addItemToCart(cartItem);
  }

  const deleteItem = () => {
    deleteItemFromCart(cartItem);
  }
  return (
    <div className='checkout-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>
          <button onClick={minusItem}>-</button> {quantity}<button onClick={addItem}>+</button>  x ${price}
        </span>
        
        <Button buttonType='inverted' onClick={deleteItem}>Remove</Button>
      </div>
    </div>
  );
};

export default CartOut;