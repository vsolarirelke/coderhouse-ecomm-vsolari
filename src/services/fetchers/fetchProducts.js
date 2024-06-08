import {collection, doc, getDoc, getDocs, query, where} from "firebase/firestore"
import db from '../../db/db';

//Trate todos los productos
const getProducts = () => {
    //Llamada a API
    // return fetch("http://localhost:8080/api/productos")
    //   .then((respuesta) => {
    //     console.log(respuesta.json())
    //     return respuesta.json()
    //   })

    //Llamada a model/products
    // return new Promise((resolve, reject) => {
    //     //simulamos un retraso de red
    //     setTimeout(() => {
    //       resolve(products)
    //     }, 2000);
    //   });

    //Llamada a firebase
    const productsCollection = collection(db, "products")
    const result = getDocs(productsCollection)
        .then((productsDb) => {
            const data = productsDb.docs.map( (product)=>  {
                return {id: product.id, ...product.data() }
            })
            return data
        })
    return result
     
  }

//Trate todos los productos de una Categoria
const getProductsByCategory = (nameCategory) => {
    //LLAMADA A MODEL
    // return new Promise((resolve, reject) => {
    //     //simulamos un retraso de red
    //     if(idCategory){
    //         setTimeout(() => {
    //             resolve(
    //                 products.filter(product => product.category_id.toLocaleString() === idCategory.toLocaleString())
    //             )
    //         }, 2000);
    //     };
    //   });

    const productsCollection = collection(db, "products")

    const q = query(productsCollection, where("category", "==", nameCategory));
    const result = getDocs(q)
        .then((productsDb) => {
            const data = productsDb.docs.map( (product)=>  {
                return {id: product.id, ...product.data() }
            })
            return data
        })

    return result
  }

//Trate un producto segun su id
const getProductById = (idProduct) => {
    // return fetch(`http://localhost:8080/api/productos/${idProduct}`)
    // .then((respuesta) => {
    //     return respuesta.json()
    // })
    //console.log(products)
    //console.log(idProduct)
    //llamada a Model/products.js
    // return new Promise((resolve, reject) => {
    //     //simulamos un retraso de red
    //     if(idProduct){
    //         setTimeout(() => {
    //             resolve(
    //                 products.find(product => product.id.toLocaleString() === idProduct.toLocaleString())
    //             )
    //         }, 2000);
    //     };
    // });

    //Llamada a firebase
    const productRef = doc(db, "products", idProduct)
    const result = getDoc(productRef)
        .then((productDb) => {
            let exists = false
            if(productDb.data()){
                exists = true
            }

            const data = {id: productDb.id, ...productDb.data(), exists: exists }
            return data
        })
    
    return result
}

//Trate crea un producto
// const createProduct = (newProduct) => {
//     // return fetch("http://localhost:8080/api/productos", {
//     //     method: "POST",
//     //     headers: {
//     //         'Content-type': 'application/json'
//     //     },
//     //     body: JSON.stringify(newProduct)
//     // })
//     // .then((respuesta) => {
//     //     return respuesta.json()
//     // })
//     return new Promise((resolve, reject) => {
//         //simulamos un retraso de red
//         setTimeout(() => {
//           resolve(products.push(newProduct))
//         }, 2000);
//     });
// }
  
// const updateProductById = (idProduct, mod) => {
//     return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
//         method: "PUT",
//         headers: {
//         'Content-type': 'application/json'
        
//         },
//         body: JSON.stringify(mod)
//     })
//     .then((respuesta) => {
//         return respuesta.json()
//     })
// }
  
// const destroyProductById = (idProduct) => {
//     return fetch(`http://localhost:8080/api/productos/${idProduct}`, {
//         method: "DELETE"
//     })
//     .then((respuesta) => {
//         return respuesta.json()
//     })
// }
  
  
export { getProducts, getProductById, getProductsByCategory}