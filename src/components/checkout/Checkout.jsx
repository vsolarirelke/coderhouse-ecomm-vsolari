import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/fetchers/fetchOrders";
import { Timestamp } from "firebase/firestore";

// import validateForm from "../../utils/validationYup.js";
// import { toast } from "react-toastify";

// import "./checkout.css"

const Checkout = () => {
  
 const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
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
    //   const response = await validateForm(dataForm)
    //   if(response.status === "success"){
    //     //generateOrder(orden);
    //     alert("formulario ok")
    //   }else{
    //     toast.warning(response.message)
    //   }
        
        const result = await createOrder(order)
        if (result.status === import.meta.VITE_STATUS_SUCCESS){
            setIdOrder(result.id)
            resetShoppingCart()
        }
        console.log("********* checkut ******")
        console.log("result", result.id)
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
        <div className="order-generated">
          <h2>Orden generada con exito!🤩</h2>
          <p> guarde el id de su orden: {idOrder} </p>
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
