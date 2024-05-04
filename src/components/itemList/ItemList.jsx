import Item from '../item/Item';

const ItemList = ( {products} ) => {
    return (
        <div className="container">
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