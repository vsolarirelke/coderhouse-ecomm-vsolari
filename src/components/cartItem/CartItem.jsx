import React from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";

const CartItem = ({product, index, removeProductShoppingCart}) => {
//Se deja esta linea ya que la ppt solicita de esta forma, pero ambas son funciones
//function Item ( {product} ) {

    const imgUrl = new URL(`../item/assets/${product.pictureUrl}`, import.meta.url).href
    console.log(imgUrl)
    return (
        <tr>
            <th scope="row">{index}</th>
            <td><img src={ imgUrl } className="" width={40} height={40} /></td>
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