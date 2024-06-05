import { FaApple } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaTicket } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa6";



import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const CheckoutForm = ({ dataForm, handleChangeInput, handleSubmitForm }) => {

    const { shoppingCart, totalPriceShoppingCart } = useContext(CartContext)

    return (
        <div className="cart-container">
            <div className="container">
                <div className="py-1 text-center">
                    <FaApple className="font-size-50"/>
                    <h3>Finalizar compra</h3>
                </div>
                <div className="row g-5">
                    <div className="col-md-5 col-lg-4 order-md-last">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Tu carrito</span>
                            <span className="badge bg-primary rounded-pill">{shoppingCart.length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {
                                shoppingCart.map( (cartItem, index) =>  (
                                    <li className="list-group-item d-flex justify-content-between lh-sm" key={`cartItem_${cartItem.id}`}>
                                        <div>
                                        <h6 className="my-0">{cartItem.title}</h6>
                                        <small className="text-muted">{cartItem.category}</small>
                                        </div>
                                        <span className="text-muted">${cartItem.price_sale}</span>
                                    </li>
                                ))
                            }
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total </span>
                                <strong>${totalPriceShoppingCart()}</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-lg-8">
                        <h4 className="mb-3">Dirección de envio</h4>
                        <form className="needs-validation" onSubmit={handleSubmitForm}>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <label className="form-label">Nombres</label>
                                    <input type="text" className="form-control" name="firstName" placeholder=""  value={dataForm.firstName} onChange={handleChangeInput} />
                                    <div className="invalid-feedback">
                                        Debe ingresar Nombres
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label">Apellidos</label>
                                    <input type="text" className="form-control" name="lastName" placeholder="" rvalue={dataForm.lastName} onChange={handleChangeInput}/>
                                    <div className="invalid-feedback">
                                        Debe ingresar Apellidos.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Correo Electrónico </label>
                                    <input type="email" className="form-control" name="email" placeholder="you@example.com" value={dataForm.email} onChange={handleChangeInput}/>
                                    <div className="invalid-feedback">
                                        Debe ingresar un correo electrónico valido
                                    </div>
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Correo Electrónico Validación</label>
                                    <input type="email" className="form-control" name="emailVerify" placeholder="you@example.com" value={dataForm.emailVerify} onChange={handleChangeInput}/>
                                    <div className="invalid-feedback">
                                        Debe ingresar un correo electrónico valido
                                    </div>
                                </div>
                                <div className="col-9">
                                    <label className="form-label">Dirección</label>
                                    <input type="text" className="form-control" name="address" placeholder="Alameda 123, Santiago, Chile" value={dataForm.address} onChange={handleChangeInput}/>
                                    <div className="invalid-feedback">
                                        Debe ingresar una dirección de despacho
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Código Postal<span className="text-muted">(Opcional)</span></label>
                                    <input type="text" className="form-control" name="codePostal" placeholder="" value={dataForm.codePostal} onChange={handleChangeInput}/>
                                </div>
                            </div>

                            <hr className="my-4"/>

                            <h4 className="mb-3">Forma de Pago</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked  value={dataForm.paymentMethod} onChange={handleChangeInput}/>
                                    <FaCcVisa /> &nbsp;&nbsp;<label className="form-check-label">Tarjeta Crédito</label>
                                </div>
                                <div className="form-check">
                                    <FaTicket /> &nbsp;&nbsp;<input id="debit" name="paymentMethod" type="radio" className="form-check-input"  value={dataForm.paymentMethod} onChange={handleChangeInput}/>
                                    <label className="form-check-label">Tarjeta Debito</label>
                                </div>
                                <div className="form-check">
                                    <FaCcPaypal /> &nbsp;&nbsp;<input id="paypal" name="paymentMethod" type="radio" className="form-check-input"  value={dataForm.paymentMethod} onChange={handleChangeInput}/>
                                    <label className="form-check-label" >PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-3">
                                <div className="col-md-6">
                                    <label className="form-label">Titular</label>
                                    <input type="text" className="form-control" name="ccName" placeholder="" value={dataForm.ccName} onChange={handleChangeInput}/>
                                    <small className="text-muted">Nombre completo como se muestra en la tarjeta.</small>
                                    <div className="invalid-feedback">
                                        Nombre del titular de la tarjeta es requerido
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Numero de Tarjeta</label>
                                    <input type="text" className="form-control" name="ccNumber" placeholder=""  value={dataForm.ccNumber} onChange={handleChangeInput}/>
                                    <div className="invalid-feedback">
                                        Numero de la tarjeta es requerido
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label">Expiración</label>
                                    <input type="text" className="form-control" name="ccExpiration" placeholder=""  value={dataForm.ccExpiration} onChange={handleChangeInput}/>
                                    <div className="invalid-feedback">
                                        Debe ingresar fecha de expiración
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label">CVV</label>
                                    <input type="number" className="form-control" name="ccCvv" placeholder="" value={dataForm.ccCvv} onChange={handleChangeInput}/>
                                    <div className="invalid-feedback">
                                        Debe ingresar codigo de seguridad
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4"/>

                            <button className="w-100 btn btn-primary btn-lg" type="submit">Finalizar compra</button>
                        </form>
                    </div>
                </div>



                {/* <center><h3>Finalizar compra</h3></center>
                <form className="form-checkout" onSubmit={handleSubmitForm}>
                    <div className="box-input">
                        <label>Nombre</label>
                        <input type="text" name="name" value={dataForm.name} onChange={handleChangeInput} />
                    </div>
            
                    <div className="box-input">
                        <label>Telefono</label>
                        <input
                        type="text"
                        name="phone"
                        value={dataForm.phone}
                        onChange={handleChangeInput}
                        />
                    </div>
            
                    <div className="box-input">
                        <label>Email</label>
                        <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} />
                    </div>
            
                    <button type="submit" className="button-submit">
                        Enviar Orden
                    </button>
                </form> */}
            </div>
        </div>

    );
  };
  export default CheckoutForm;
  