import { useState } from 'react'
import { createContext } from "react";

const CartContext = createContext()

const CartProvider = ( {children} ) => {

    const [shoppingCart, setShoppingCart] = useState([])
    
    //Agregamos un producto al carro
    const addProductShoppingCart = (product) => {
        const productExists = shoppingCartFindProductId(product.id)
        console.log("*************")
        console.log(product)
        console.log("stock"+product.stock)
        if(productExists){
            //Producto existe, sumamos cantidad
            const productUpdate = shoppingCart.map( (productCart)  => {
                if(productCart.id === product.id){
                    
                    const sum_quantity = productCart.quantity + product.quantity
                    console.log("sum_quantity:"+sum_quantity)
                    console.log("productCart.stock:"+productCart.stock)
                    if(sum_quantity > productCart.stock){
                        //return alert("Producto excede stock")
                        return { ...productCart, outOfStock: true}
                    }else{
                        return { ...productCart, quantity: productCart.quantity + product.quantity, price_sale: (productCart.quantity + product.quantity)*product.price }
                    }

                }else{
                    productCart
                }
            })
            console.log("productUpdate....")
            console.log(productUpdate)
            if (productUpdate[0].outOfStock){
                console.log("producto sin stock")
                return alert("Producto excede stock")
            }else{
                setShoppingCart(productUpdate)
            }
            
        }else{
            //Producto nuevo en cartito
            setShoppingCart([ ...shoppingCart, product])
        }
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
    addProductShoppingCart
    

    return(
        <CartContext.Provider value={ { shoppingCart, addProductShoppingCart, removeProductShoppingCart, totalQuantityShoppingCart, totalPriceShoppingCart, resetShoppingCart} }> 
            { children }
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}