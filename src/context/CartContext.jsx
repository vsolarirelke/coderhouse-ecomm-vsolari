import { useEffect, useState } from 'react'
import { createContext } from "react";

const CartContext = createContext()

const CartProvider = ( {children} ) => {

    const ssShoppingCart = JSON.parse(sessionStorage.getItem('ssShoppingCart')) || []
    const [shoppingCart, setShoppingCart] = useState(ssShoppingCart)
    
    useEffect(() => {
        sessionStorage.setItem('ssShoppingCart', JSON.stringify(shoppingCart));
    }, [shoppingCart]);
    
    //Agregamos un producto al carro
    const addProductShoppingCart = (product) => {
        const productExists = shoppingCartFindProductId(product.id)
        
        if(productExists){
            //Producto existe, sumamos cantidad
            const productUpdate = shoppingCart.map( (productCart)  => {
                if(productCart.id === product.id){
                    const sum_quantity = productCart.quantity + product.quantity
                    if(sum_quantity > productCart.stock){
                        const stockSuggested = productCart.stock-productCart.quantity
                        if(stockSuggested > 0){
                            return { product: { ...productCart, quantity: productCart.quantity + stockSuggested, price_sale: (productCart.quantity + stockSuggested)*product.price }, outOfStock: false}
                        }else{
                            return { product: { ...productCart}, outOfStock: true, stockSuggested: stockSuggested }
                        }
                            
                    }else{
                        return { product: { ...productCart, quantity: productCart.quantity + product.quantity, price_sale: (productCart.quantity + product.quantity)*product.price }, outOfStock: false}
                    }

                }else{
                    return { product: {productCart}, outOfStock: false}
                }
            })
            
            if (productUpdate[0].outOfStock === true){
                return { status: import.meta.env.VITE_STATUS_ERROR, error: "No existe stock disponible", stockSuggested: productUpdate[0].stockSuggested }
            }else{
                setShoppingCart([productUpdate[0].product])
            }
            
        }else{
            //Producto nuevo en cartito
            setShoppingCart([ ...shoppingCart, product])
        }

        return { status: import.meta.env.VITE_STATUS_SUCCESS }
    }

    //Busca un procuto en el carro
    const shoppingCartFindProductId = (productId) => {
        return shoppingCart.some( (productItem) => productItem.id === productId )
    }

    //Cantidad total de productos
    const totalQuantityShoppingCart = () => {
        return shoppingCart.reduce( (totalQuantity, product) => totalQuantity + product.quantity, 0 )
       
    }

    //Precio total del carro
    const totalPriceShoppingCart = () => {
        return shoppingCart.reduce( (total, productItem) => total + ( productItem.price_sale ), 0)
        
    }

    const resetShoppingCart = () =>{
        setShoppingCart([])
    }

    //Elimina producto especifico
    const removeProductShoppingCart = (productId) => {
        const othersProducts = shoppingCart.filter( (productCart) => productCart.id !== productId )
        setShoppingCart(othersProducts)
    }

    return(
        <CartContext.Provider value={ { shoppingCart, addProductShoppingCart, removeProductShoppingCart, totalQuantityShoppingCart, totalPriceShoppingCart, resetShoppingCart} }> 
            { children }
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}