import {  useContext } from 'react';
import './categories-preview.styles.scss';
import { CategoriesContext } from '../../../Context/categories.context';
import CategoryPreview from '../category-preview.component';
const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div  >
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return(
                        <CategoryPreview key={title} title={title} products={products} />
                    )

                })
            }


        </div>

    )
}

export default CategoriesPreview;