import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import ElementEmpty from '../elementEmpty/ElementEmpty';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { createOrder } from "../../services/fetchers/fetchOrders";
import { Timestamp } from "firebase/firestore";
import { FaApple } from "react-icons/fa";
import { Link } from 'react-router-dom';
import validateForm from "./validations/CheckoutFormValid";
import { toast } from "react-toastify";

const Checkout = () => {
  
 const [dataForm, setDataForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    emailVerify: "",
    codePostal: "",
    phone:"",
    address: "",
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

      if(response.status === "success"){
        //generateOrder(orden);
        const result = await createOrder(order)
        if (result.status === import.meta.env.VITE_STATUS_SUCCESS){
            setIdOrder(result.id)
            resetShoppingCart()
        }
      }else{
        toast.warning(response.message)
      }
        
    } catch (error) {
      console.error(error)
    }
  };

  //subimos nuestra orden a firebase
  const generateOrder = (orden) => {
    const ordenesRef = collection(db, "orders");
    addDoc(ordenesRef, orden)
      .then((respuesta) => setIdOrder(respuesta.id))
      .catch((error)=> console.error(error))
      .finally(()=> {
        //luego de que se subio la orden, vaciamos el carrito
        resetShoppingCart()
      })
  };

  //Formato fecha
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

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
                    
                    <p>Su compra fue relizada hoy {new Date().toLocaleDateString('es-CL', options)} {new Date().toLocaleTimeString()}</p>
                    <br />
                    <Link to='/' className="add-to-cart" >Seguir comprando</Link>
                </div>
            </div>
        </div>
      ) : (
        shoppingCart.length > 0 ?
          <CheckoutForm
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSubmitForm={handleSubmitForm}
          />
        :
        <ElementEmpty type={"cart"} />
      )}


    </div>
  );
};
export default Checkout;
