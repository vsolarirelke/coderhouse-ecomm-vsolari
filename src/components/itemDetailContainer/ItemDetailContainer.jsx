import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/fetchers/fetchProducts';
import ItemDetail from '../itemDetail/ItemDetail';
import ItemDetailContainerLoader from './ItemDetailContainerLoader';
import ElementEmpty from '../elementEmpty/ElementEmpty';
// import ItemDetailNotFound from '../ItemDetailNotFound/ItemDetailNotFound';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const {productId} = useParams()
    const [loading, setLoading] = useState(true)
    const [productExists, setProductExists] = useState(true)

    useEffect(() => {
        setLoading(true)
        const callMethod = getProductById
        callMethod(productId)
            .then(response => {
                console.log(`ItemDetailContainer - then`)
                console.log("productId:"+productId)
                console.log("response:"+response)
                console.log(JSON.stringify(response))
                if(response.exists === true){
                    setProduct(response)
                }else{
                    setProductExists(false)
                }
                
            })
            .catch(error => {
                console.log(`ItemDetailContainer - error: ${error}`)
                console.error(error)
            })
            .finally(() => {
                console.log("ItemDetailContainer - finally")
                setLoading(false)
            })
    }, [productId] )
    
    return (
        <div className="item-detail-container">
            {productId !== null && productId != undefined && (
                loading ? <ItemDetailContainerLoader /> : ( productExists ? <ItemDetail product={product} /> : <ElementEmpty type={"product"} /> )
            )}  
        </div>
    )
}

export default ItemDetailContainer;