import React from 'react';
import ItemCount from '../itemCount/ItemCount';
//const pathContextImage = import.meta.glob('./assets/')//require.context('./assets/', true)
//import pathImage from './assets/'

const CartProduct = ({product}) => {

    const imgUrl = new URL(`./assets/${product.image_url}`, import.meta.url).href
    
    return (
        <div className="col">
            <div className="card shadow-sm" style={{width: '18rem'}}> 
                {/* <img src={image_url} className="bd-placeholder-img card-img-top" width={200} height={286} /> */}
                {/* <img src={`./assets/${image_url}`} className="bd-placeholder-img card-img-top" width={200} height={286} />
                 */}
                {/* <img src={ pathContextImage(`./${image_url}`) } className="bd-placeholder-img card-img-top" width={200} height={286} />  */}
                
                <img src={ imgUrl } className="bd-placeholder-img card-img-top" width={200} height={286} />
                <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <div className="text-center card-price">Precio: $ {product.price}</div>
                    <div className="text-center card-stock">Stock disponible: {product.stock}</div>
                    <ItemCount initial={product.stock > 0 ? 1 : 0} stock={product.stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
                    <div className="text-center">
                        <a href="#" className="btn btn-secondary">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;