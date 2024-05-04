import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/fetchers/fetchProducts';
import ItemDetail from '../itemDetail/ItemDetail';


const ItemDetailContainer = () => {

    let style_css = {"marginBottom": "30px",
                     "marginTop": "90px"}
    
    const [product, setProduct] = useState([])
    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                console.log("itemId:"+itemId)
                console.log("response:"+response)
                setProduct(response)
            })
            .catch(error => {
                console.log(`ItemDetailContainer - error: ${error}`)
                console.error(error)
            })
            .finally(() => {
                console.log("ItemDetailContainer - finally")
            })
    }, [itemId])
    
    return (
        <div className="item-detail-container" style={style_css}>
            <ItemDetail product={product} />      
        </div>
    )
}

export default ItemDetailContainer;