import {collection, doc, getDoc, getDocs} from "firebase/firestore"
import db from '../../db/db';

//Trate todos los categorias
const getCategories = () => {
    //LLAMADA API
    // return fetch("http://localhost:8080/api/categorias")
    //   .then((respuesta) => {
    //     console.log(respuesta.json())
    //     return respuesta.json()
    //   })
    // LLAMADA MODEL
    // return new Promise((resolve, reject) => {
    //     //simulamos un retraso de red
    //     setTimeout(() => {
    //       resolve(categories)
    //     }, 2000);
    //   });
    //LLAMADA CATEGORIAS FIREBASE
    console.log("fetchCategories.getCategories")
    const categoriesCollection = collection(db, "categories")
    const result = getDocs(categoriesCollection)
        .then((categoriesDb) => {
            console.log(categoriesDb)
            const data = categoriesDb.docs.map( (category)=>  {
                return {id: category.id, ...category.data() }
            })
            console.log("*****DATA****")
            console.log(data)
            return data
        })
    console.log("*****result")
    console.log(result)
    
    return result
  }

//Trate una Categoria segun su id
const getCategoryById = (idCategory) => {
    //LLAMADA API
    // return fetch(`http://localhost:8080/api/productos/${idProduct}`)
    // .then((respuesta) => {
    //     return respuesta.json()
    // })
    //LLAMADA MODEL
    // return new Promise((resolve, reject) => {
    //     //simulamos un retraso de red
    //     setTimeout(() => {
    //         resolve(categories.find(category => category.id === idCategory))
    //     }, 2000);
    // });
    //LLAMADA FIREBASE
    const categoryDoc = doc(db, "categories", idCategory)
    const result = getDoc(categoryDoc)
        .then((categoryDb) => {
            const data = {id: categoryDb.id, ...categoryDb.data() }
            console.log("*****DATA****")
            console.log(data)
            return data
        })
    console.log("*****result")
    console.log(result)
    
    return result
}

//Trate crea un Categoria
// const createCategory = (newCategory) => {
//     // return fetch("http://localhost:8080/api/categorias", {
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
//           resolve(categories.push(newCategory))
//         }, 2000);
//     });
// }

//Actualiza un Categoria
// const updateCategoryById = (idCategory, attributes) => {
//     return fetch(`http://localhost:8080/api/categorias/${idCategory}`, {
//         method: "PUT",
//         headers: {
//         'Content-type': 'application/json'
        
//         },
//         body: JSON.stringify(attributes)
//     })
//     .then((respuesta) => {
//         return respuesta.json()
//     })
// }

//Elimina una Categoria
// const destroyCategoryById = (idCategory) => {
//     return fetch(`http://localhost:8080/api/categorias/${idCategory}`, {
//         method: "DELETE"
//     })
//     .then((respuesta) => {
//         return respuesta.json()
//     })
// }
  
  
export { getCategories, getCategoryById}