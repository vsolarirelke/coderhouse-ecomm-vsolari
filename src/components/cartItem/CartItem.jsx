import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTrash3Fill } from "react-icons/bs";

const CartItem = ({product, index, removeProductShoppingCart}) => {

    const imgUrl = new URL(`../item/assets/${product.pictureUrl}`, import.meta.url).href
    
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>
                
                <Link to={`/item/${product.id}`}><img src={ imgUrl } className="" width={40} height={40} /></Link>
            </td>
            <td>{product.title}</td>
            <td>$ {product.price}</td>
            <td>x {product.quantity}</td>
            <td><b>$ {product.price_sale}</b></td>
            <td>
                <a onClick={ () => removeProductShoppingCart(product.id) } >
                    <BsFillTrash3Fill size={20} />
                </a>
            </td>
        </tr>
    )
}

export default CartItem;