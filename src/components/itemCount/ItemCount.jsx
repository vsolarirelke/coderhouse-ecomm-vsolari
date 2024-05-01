import './ItemCount.css'
import { useState } from "react"
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";

const ItemCount = ( {stock, initial, onAdd } ) => {
    const [quantity, setQuantity] = useState(initial)

    const incrementQuantity = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrementQuantity = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return (
        <>
            <div className="row text-center pt-10">
                <div className="col">
                    <button onClick={decrementQuantity} disabled={ (stock<1) } className="btn-decrement"><FaSquareMinus  /></button>
                </div>
                <div className="col">
                    <div>{quantity}</div>
                </div>
                <div className="col">
                    <button onClick={incrementQuantity} disabled={ (stock<1) } className="btn-increment"><FaSquarePlus /></button>
                </div>
            </div>
            <div className='row'>
                <div className="col-9 text-center">
                    <button className="add-to-cart" onClick={ () => onAdd(quantity)} disabled={ (stock<1) }> Agregar </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;