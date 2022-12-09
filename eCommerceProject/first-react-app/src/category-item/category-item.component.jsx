import './category-item.component.scss'

const categoryItem = ({category}) => {

    const {imageUrl,title} = category;
return (
    
        
          <div className="category-container">
          <div className="background-image" style={{
            backgroundImage:`url(${imageUrl})`,
          }}/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <button>Shop Now</button>
          </div>
        </div>
       
    
)


};

export default categoryItem;