import './category.styles.scss';
import {useParams,} from 'react-router-dom';
import {useContext,useState,useEffect} from 'react';
import { CategoriesContext } from '../../Context/categories.context';
import ProductCard from '../product-card.component';


const Category = () => {
     const {category} = useParams();
     const {categoriesMap} = useContext(CategoriesContext);
    //  const products = categoriesMap[category];
    const [products,setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    },[category,categoriesMap]);

    return (
        <div className='category-container'>
            {products && products.map((product)=><ProductCard key={product.id} product={product} />)}
        </div>
    )
}

export default Category;