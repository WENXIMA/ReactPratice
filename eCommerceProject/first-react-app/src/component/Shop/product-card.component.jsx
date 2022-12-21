import './product-card.styles.scss';
import Button from '../../UI/Button/button.component';
import {useContext} from 'react';
import { CartContext } from '../Context/cart.context';


const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);
    
    const handleChange = () => {
        addItemToCart(product)
    }
    return(
        <div className='product-card-container'>
        <img src={`${imageUrl}`} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType={'inverted'} onClick={handleChange }>Add to card</Button>
    </div>
    )
    
};

export default ProductCard;