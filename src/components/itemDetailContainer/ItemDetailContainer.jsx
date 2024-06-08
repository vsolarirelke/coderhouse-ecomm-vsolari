import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../services/fetchers/fetchProducts';
import ItemDetail from '../itemDetail/ItemDetail';
import ItemDetailContainerLoader from './ItemDetailContainerLoader';
import ElementEmpty from '../elementEmpty/ElementEmpty';
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
                if(response.exists === true){
                    setProduct(response)
                }else{
                    setProductExists(false)
                }
                
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
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