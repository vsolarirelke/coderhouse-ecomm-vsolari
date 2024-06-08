import {collection, doc, getDoc, getDocs} from "firebase/firestore"
import db from '../../db/db';

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
    const categoriesCollection = collection(db, "categories")
    const result = getDocs(categoriesCollection)
        .then((categoriesDb) => {
            return categoriesDb.docs.map( (category)=>  {
                return {id: category.id, ...category.data() }
            })
        })
    
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
            return data
        })
    
    return result
}

export { getCategories, getCategoryById}