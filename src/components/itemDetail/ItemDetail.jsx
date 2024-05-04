import React from 'react';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    //Validacion - Solo pintamos si viene product
    if(product.length === 0){
        return null
    }
    const imgUrl = new URL(`../item/assets/${product.pictureUrl}`, import.meta.url).href
   
    // <div className="col">
        //     <div className="card shadow-sm" style={{width: '18rem'}}> 
        //         <img src={ imgUrl } className="bd-placeholder-img card-img-top" width={200} height={286} />
        //         <div className="card-body">
        //             <h6 className="card-title">******{product.title}</h6>
        //             <div className="text-center card-price">Precio: $ {product.price}</div>
        //             <div className="text-center card-stock">Stock disponible: {product.stock}</div>
        //             <ItemCount initial={product.stock > 0 ? 1 : 0} stock={product.stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
        //             <div className="text-center">
        //                 <a href="#" className="btn btn-secondary">Comprar</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    return (
        

        <div className="container">
            <div className="card">
                <div className="container-fliud">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            <div className="tab-content">
                                <div className="tab-pane active"><img src={imgUrl} style={{width: '500px'}} /></div>
                            </div>
                        </div>
                        <div className="item-detail-details col-md-6">
                            <h3 className="product-title">{product.title}</h3>
                            <div className="rating">
                                <div className="stars">
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star checked"></span>
                                    <span className="fa fa-star"></span>
                                    <span className="fa fa-star"></span>
                                </div>
                            </div>
                            <p className="product-description">{product.description}</p>
                            <h4 className="price">Precio: <span>${product.price}</span></h4>
                            <h6 className="price">Stock: <span>{product.stock}</span></h6>
                            <div className="action">
                                <ItemCount initial={product.stock > 0 ? 1 : 0} stock={product.stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail;