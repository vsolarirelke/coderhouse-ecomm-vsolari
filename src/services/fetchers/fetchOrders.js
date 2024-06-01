import {collection, addDoc} from "firebase/firestore"
import db from '../../db/db';

//Crear una orden
const createOrder = (newOrder) => {
    const ordersCollection = collection(db, "orders");
    const result = addDoc(ordersCollection, newOrder)
      .then((response) => {
        return { status: import.meta.VITE_STATUS_SUCCESS, id:response.id, response: response }
      })
      .catch((error)=> {
        console.log(error)
        return { status: import.meta.VITE_STATUS_ERROR, error: error }
      })
    console.log("result", result)
    return result
}
  
  
export { createOrder}