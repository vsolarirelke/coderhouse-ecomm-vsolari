import Products from '../../models/Products';
import CartProduct from '../cartProduct/CartProduct';

const ItemListContainer = ({greeting}) => {

    let style_css = {"marginBottom": "30px",
                     "marginTop": "90px"}
    
    return (
        <main className="item-list-container" style={style_css}>
            <div className="d-flex justify-content-center align-self-center">
                <h1>{greeting}</h1>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 item-list">
                    {Products.map( product => (
                        <CartProduct key={`cart_${product.id}`} id={product.id} image_url={product.image_url} name={product.name}/>
                    ))}
                </div>   
            </div>         
        </main>
    )
}

export default ItemListContainer;