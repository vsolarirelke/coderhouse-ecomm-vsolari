import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/fetchers/fetchOrders";
import { Timestamp } from "firebase/firestore";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import validateForm from "./validations/CheckoutFormValid";
import { toast } from "react-toastify";

// import validateForm from "../../utils/validationYup.js";
// import { toast } from "react-toastify";

// import "./checkout.css"

const Checkout = () => {
  
 const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailVerify: "",
    address: "",
    codePostal: "",
    paymentMethod: "",
    ccName: "",
    ccNumber: "",
    ccExpiration: "",
    ccCvv: ""
  });

  const [idOrder, setIdOrder] = useState(null);
  const { shoppingCart, totalPriceShoppingCart, resetShoppingCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = async(event) => {
    event.preventDefault();
    //le damos formato a los datos que vamos a subir
    const order = {
      buyer: { ...dataForm },
      products: [...shoppingCart],
      payment_date: Timestamp.fromDate(new Date()),
      price_total: totalPriceShoppingCart(),
    };
    try {
      //Validamos formulario
      const response = await validateForm(dataForm)
      console.log("RESPONSE", response)
      if(response.status === "success"){
        //generateOrder(orden);
        const result = await createOrder(order)
        if (result.status === import.meta.VITE_STATUS_SUCCESS){
            setIdOrder(result.id)
            resetShoppingCart()
        }
        console.log("********* checkut ******")
        console.log("result", result.id)
      }else{
        toast.warning(response.message)
      }
        
    } catch (error) {
      console.log(error)
    }
  };

  //subimos nuestra orden a firebase
  const generateOrder = (orden) => {
    const ordenesRef = collection(db, "orders");
    addDoc(ordenesRef, orden)
      .then((respuesta) => setIdOrder(respuesta.id))
      .catch((error)=> console.log(error))
      .finally(()=> {
        //reducir el stock
        //updateStock()
        //luego de que se subio la orden, vaciamos el carrito
        resetShoppingCart()
      })
  };

  //no es requerido en el proyecto final
//   const updateStock = () => {
//     carrito.map((productoCarrito)=> {
//       //guardamos la cantidad para luego restarla en el stock
//       let quantity = productoCarrito.quantity
//       //borramos el campo quantity
//       delete productoCarrito.quantity

//       const productoRef = doc(db, "products", productoCarrito.id)
//       setDoc(productoRef, { ...productoCarrito, stock: productoCarrito.stock - quantity })
//         .then(()=> console.log("stock actualizado correctamente"))
//         .catch((error)=> console.log(error))
//     })
//   }

  return (
    <div className="checkout">
      {idOrder ? (
        <div className="cart-container">
            <div className="container">
                <div className="py-1 text-center">
                    <FaApple className="font-size-50"/>
                    <h3>Compra realizada con exito!</h3>
                    <br/>
                    <br/>
                    <p>Guarde el id de su orden:  </p>
                    <h3>{idOrder}</h3>
                    <br/>
                    <br/>
                    <Link to='/' className="add-to-cart" >Seguir comprando</Link>
                </div>
            </div>
        </div>
      ) : (
        <CheckoutForm
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      )}
    </div>
  );
};
export default Checkout;
