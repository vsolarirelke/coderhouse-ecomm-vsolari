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
    const {categoryId} = useParams()
    const [categoryExists, setCategoryExists] = useState(true)

    useEffect(() => {
        setLoading(true)
        const callMethod = categoryId ?  getProductsByCategory : getProducts
        callMethod(categoryId)
            .then(response => {
                console.log(`ItemListContainer - then`)
                console.log("categoryId:"+categoryId)
                console.log("response:"+response)
                console.log(JSON.stringify(response))
                console.log(response.length)
                console.log(categoryId)

                if(categoryId === undefined || response.length > 0){
                    console.log("ENTROOO PRODUCTOS O CATEGORIAS")
                    setProducts(response)
                    setCategoryExists(true)
                }else{
                    console.log("NO ENTRO")
                    setCategoryExists(false)
                }

                //setProducts(response)
            })
            .catch(error => {
                console.log(`ItemListContainer - error: ${error}`)
                console.error(error)
            })
            .finally(() => {
                console.log("ItemListContainer - finally")
                setLoading(false)
            })
    }, [categoryId])
    
    return (
        <div className="item-list-container">
        
            {categoryId === null || categoryId === undefined && (
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