import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../services/fetchers/fetchProducts';
import ItemList from '../itemList/ItemList';
import ItemListContainerLoader from './ItemListContainerLoader';
import ElementEmpty from '../elementEmpty/ElementEmpty';
import './ItemListContainer.css'
import '../../App.css'

const ItemListContainer = ( {greeting} ) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryName} = useParams()
    const [categoryExists, setCategoryExists] = useState(true)

    useEffect(() => {
        setLoading(true)
        const callMethod = categoryName ?  getProductsByCategory : getProducts
        callMethod(categoryName)
            .then(response => {
                
                if(categoryName === undefined || response.length > 0){
                    setProducts(response)
                    setCategoryExists(true)
                }else{
                    setCategoryExists(false)
                }

            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryName])
    
    return (
        <div className="item-list-container">
        
            {categoryName === null || categoryName === undefined && (
                <div className="d-flex justify-content-center align-self-center">
                    <h1>{greeting}</h1>
                </div>
            )}

            {
                loading ? <ItemListContainerLoader /> : ( categoryExists ? <ItemList products={products} /> : <ElementEmpty type={"category"} /> )
            }
                
        </div>
    )
}

export default ItemListContainer;