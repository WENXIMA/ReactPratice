import './categoryList.scss';
import DirectoryItem from './directory-item.component';

const categoryList = ({categories}) => {
    
    return (
        <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />

      ))}
    </div>
    )
};

export default categoryList;