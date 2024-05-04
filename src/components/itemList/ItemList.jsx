import { useParams } from 'react-router-dom';
import Item from '../item/Item';
import ItemBreadcrumb from '../itemBreadcrumb/ItemBreadcrumb';

const ItemList = ( {products} ) => {
    
    const {categoryId} = useParams()

    const firtProduct = products.length > 0 ? products[0] : null;

    return (
        <div className="container">
            {categoryId && firtProduct && (
                <ItemBreadcrumb category_id={firtProduct.category_id} category_name={firtProduct.category}/>
            )}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 item-list">
                {products.map( product => 
                    // <Item key={`cart_${product.id}`} id={product.id} image_url={product.image_url} name={product.name} stock={product.stock}/>
                    <Item  key={`cart_${product.id}`} product={product} />
                )}
            </div>   
        </div>  
    )
}
export default ItemList;