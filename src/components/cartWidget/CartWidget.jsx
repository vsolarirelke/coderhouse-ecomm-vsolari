import { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const { totalQuantityShoppingCart } = useContext(CartContext)
    const [count, setCount] = useState(0)
    let totalQuantity = totalQuantityShoppingCart()
    return (
        <div>
            <Link to="/cart" className="btn btn-primary">
                <FiShoppingCart color="white" size={20} /> &nbsp;
                {totalQuantity > 0 && (
                    <span className="badge bg-danger">{totalQuantity}</span>
                )}
            </Link>
        </div>
    )
}



export default CartWidget;