import { Link } from 'react-router-dom';
import './directory-item.component.scss'

const DirectoryItem = ({category}) => {

    const {imageUrl,title} = category;
return (
    
        
          <div className="directory-item-container">
          <div className="background-image" style={{
            backgroundImage:`url(${imageUrl})`,
          }}/>
          <div className="body">
            <h2>{title}</h2>
            <Link to='/shop'>Shop Now</Link>
          </div>
        </div>
       
    
)


};

export default DirectoryItem;