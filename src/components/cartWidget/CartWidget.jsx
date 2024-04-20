import { useState } from 'react'
import { FiShoppingCart } from "react-icons/fi";


const CartWidget = () => {
    
    const [count, setCount] = useState(0)

    return (
        <div>
            <button type="button" className="btn btn-primary">
                <FiShoppingCart color="white" size={20} /> &nbsp;
                <span className="badge bg-danger">{count}</span>
            </button>
        </div>
    )
}

export default CartWidget;