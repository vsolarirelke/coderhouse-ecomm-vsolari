import { useEffect, useState } from 'react';
import { getProducts } from '../../services/fetchers/fetchProducts';
import ItemList from '../itemList/ItemList';


const ItemListContainer = ( {greeting} ) => {

    let style_css = {"marginBottom": "30px",
                     "marginTop": "90px"}
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(`ItemListContainer - error: ${error}`)
                console.error(error)
            })
            .finally(() => {
                console.log("ItemListContainer - finally")
            })
    }, [])
    
    return (
        <div className="item-list-container" style={style_css}>
            <div className="d-flex justify-content-center align-self-center">
                <h1>{greeting}</h1>
            </div>
            <ItemList products={products} />      
        </div>
    )
}

export default ItemListContainer;