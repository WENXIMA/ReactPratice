import { useContext } from 'react';
import { CartContext } from '../../Context/cart.context';
import CardOut from './CartOut';

const CheckOut = () => {
    const { cartItems,cartTotal } = useContext(CartContext);

    return (
        <div>Checkout Page
            <div className='checkout-container'>
                {/* <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                    <div className='header-block'>

                    </div>
                </div> */}
            </div>
            <div>
                {cartItems.map((item) =>
                    <CardOut key={item.id} cartItem={item} />
                )}
                <h4>Total Price:{cartTotal}</h4>
                <p></p>

            </div>
        </div>
    )
};

export default CheckOut;