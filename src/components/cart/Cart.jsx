import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../cartItem/CartItem"
import CartEmpty from "../cartEmpty/CartEmpty";
import { BsFillTrash3Fill } from "react-icons/bs";
import './Cart.css'

const Cart = () => {

    const { shoppingCart, removeProductShoppingCart, totalPriceShoppingCart, resetShoppingCart } = useContext(CartContext)
    

    if (shoppingCart.length === 0){
        return(
            <CartEmpty/>
        )
    }

    return (
        <div className="cart-container">
            <div className="container">
                <center><h3>Carrito de compras</h3></center>
                <table className="table table-hover">
                    <thead>
                        <tr className="table-dark">
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col">Producto</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Total</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shoppingCart.map( (cartItem, index) =>  (
                                <CartItem key={`cartItem_${cartItem.id}`} product={cartItem} index={index+1} removeProductShoppingCart={removeProductShoppingCart}/>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr className="table-dark">
                            <td scope="col" colSpan="5" className="text-end">TOTAL :&nbsp;&nbsp;</td>
                            <td >$ {totalPriceShoppingCart()}</td>
                            <td ></td>
                        </tr>
                    </tfoot>
                </table>
                <center>
                    <a onClick={ resetShoppingCart } className="btn btn-reset-shopping-cart" >
                        <BsFillTrash3Fill size={20} /> Vaciar Carro
                    </a>
                </center>
            </div>  
        </div>
    )
}

export default Cart