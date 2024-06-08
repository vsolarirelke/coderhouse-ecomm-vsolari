import { useParams } from 'react-router-dom';
import Item from '../item/Item';
import ItemBreadcrumb from '../itemBreadcrumb/ItemBreadcrumb';

const ItemList = ( {products} ) => {
    
    const {categoryName} = useParams()

    const firtProduct = products.length > 0 ? products[0] : null;

    return (
        <div className="container">
            {categoryName && firtProduct && (
                <ItemBreadcrumb category_name={firtProduct.category}/>
            )}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 item-list">
                {products.map( product => 
                    <Item  key={`cart_${product.id}`} product={product} />
                )}
            </div>   
        </div>  
    )
}
export default ItemList;