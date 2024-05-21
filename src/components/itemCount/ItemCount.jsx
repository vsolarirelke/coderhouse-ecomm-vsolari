import './ItemCount.css'
import { useState } from "react"
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

const ItemCount = ( {stock, initial, addProduct } ) => {
    const [quantity, setQuantity] = useState(initial)

    const handleClicIncrementQuantity = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const handleClicDecrementQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    const handleClicAddToCart = () => {
        addProduct(quantity)
    }

    return (
        <>
            <div className="row pt-10 justify-content-md-center">
                <div className="col-md-6 offset-md-4">
                    <div className="row">
                        <div className="col-2">
                            <button onClick={handleClicDecrementQuantity} disabled={ (stock<1) } className="btn-decrement"><FaSquareMinus  /></button>
                        </div>
                        <div className="col-2">
                            <div >{quantity}</div>
                        </div>
                        <div className="col-2">
                            <button onClick={handleClicIncrementQuantity} disabled={ (stock<1) } className="btn-increment"><FaSquarePlus /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-10 justify-content-md-center">
                <div className="offset-1 col-3">
                    <button className="add-to-cart" onClick={ handleClicAddToCart } disabled={ (stock<1) }> Agregar </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;