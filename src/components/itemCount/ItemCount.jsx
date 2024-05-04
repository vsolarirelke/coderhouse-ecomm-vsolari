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
            <div class="row pt-10 justify-content-md-center">
                <div class="col-md-6 offset-md-4">
                    <div class="row">
                        <div className="col-2">
                            <button onClick={decrementQuantity} disabled={ (stock<1) } className="btn-decrement"><FaSquareMinus  /></button>
                        </div>
                        <div className="col-2">
                            <div >{quantity}</div>
                        </div>
                        <div className="col-2">
                            <button onClick={incrementQuantity} disabled={ (stock<1) } className="btn-increment"><FaSquarePlus /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-10 justify-content-md-center">
                <div class="offset-1 col-3">
                    <button className="add-to-cart" onClick={ () => onAdd(quantity)} disabled={ (stock<1) }> Agregar </button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;