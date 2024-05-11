import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/fetchers/fetchProducts';
import ItemDetail from '../itemDetail/ItemDetail';
import ItemDetailContainerLoader from './ItemDetailContainerLoader';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const {productId} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const callMethod = getProductById
        callMethod(productId)
            .then(response => {
                console.log(`ItemDetailContainer - then`)
                console.log("productId:"+productId)
                console.log("response:"+response)
                setProduct(response)
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
                loading ? <ItemDetailContainerLoader /> :  <ItemDetail product={product} />   
            )}  
        </div>
    )
}

export default ItemDetailContainer;