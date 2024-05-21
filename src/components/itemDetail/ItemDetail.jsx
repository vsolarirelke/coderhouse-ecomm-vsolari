import React from 'react';
import { useState } from 'react'
import { useContext } from "react";
import ItemCount from '../itemCount/ItemCount';
import ItemBreadcrumb from '../itemBreadcrumb/ItemBreadcrumb';
import { CartContext } from "../../context/CartContext";
import './ItemDetail.css'
import ItemFinish from '../itemFinish/itemFinish';

const ItemDetail = ({product}) => {

    const [quantityAdd, setQuantityAdd] = useState(0)
    const { addProductShoppingCart } = useContext(CartContext)

    //Validacion - Solo pintamos si viene product
    if(product.length === 0){
        return null
    }
    
    const imgUrl = new URL(`../item/assets/${product.pictureUrl}`, import.meta.url).href
    
    const addProduct = (quantity) => {
        const productCart ={ ...product, quantity: quantity, price_sale: quantity*product.price}
        console.log(productCart)
        setQuantityAdd(quantity)
        addProductShoppingCart(productCart)

    }

    return (
        

        <div className="container">
            <ItemBreadcrumb category_id={product.category_id} category_name={product.category} product_title={product.title}/>
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
                                {
                                    quantityAdd > 0 ? (
                                        <ItemFinish />
                                    ) : (
                                        <ItemCount initial={product.stock > 0 ? 1 : 0} stock={product.stock} addProduct={addProduct}/>
                                    )
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ItemDetail;