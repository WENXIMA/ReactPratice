import './categoryList.scss';
import CategoryItem from './category-item.component';

const categoryList = ({categories}) => {
    
    return (
        <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />

      ))}
    </div>
    )
};

export default categoryList;