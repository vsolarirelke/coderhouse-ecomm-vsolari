import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({product}) => {
//Se deja esta linea ya que la ppt solicita de esta forma, pero ambas son funciones
//function Item ( {product} ) {

    const imgUrl = new URL(`./assets/${product.pictureUrl}`, import.meta.url).href
    
    return (
        <div className="col">
            <div className="card shadow-sm" style={{width: '18rem'}}> 
                <img src={ imgUrl } className="bd-placeholder-img card-img-top" width={200} height={286} />
                <div className="card-body">
                    <h6 className="text-center card-title"><b>{product.title}</b></h6>
                    <div className="text-center card-price">Precio: $ {product.price}</div>
                    <div className="text-center card-stock">Stock disponible: {product.stock}</div>
                    {/* <ItemCount initial={product.stock > 0 ? 1 : 0} stock={product.stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/> */}
                    <div className="text-center pt-10">
                        {/* <a href="#" className="btn btn-secondary">Comprar</a> */}
                        <Link to={`/item/${product.id}`}  className="btn btn-secondary">Comprar</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;