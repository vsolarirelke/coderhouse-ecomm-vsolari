import { mixed, object, string, number, ref } from "yup";

let userSchema = object({
  firstName: string("Nombre debe contener solo letras").required("Nombre es requerido"),
  lastName: string("Apellido debe contener solo letras").required("Apellido es requerido"),
  email: string().email("Correo Electrónico no tiene el formato correcto").required("Correo electrónico es requerido"),
  emailVerify: string().email("Correo Electrónico Validación no tiene el formato correcto").required("Correo electrónico Validación es requerido").oneOf([ref("email"), null], 'Los correos electrónicos deben coincidir'),
  address: mixed().required("Dirección es requerida"),
  codePostal: mixed(), //.required("Código Postal es requerida"),
  paymentMethod: mixed().required("Forma de pago es requerida"),
  ccName: string("Titular tarjeta debe contener solo letras").required("Titular tarjeta es requerido"),
  ccNumber: number().min(100000000, "Numero de tarjeta valor minimo 100.000.000").max(999999999, 'Numero de tarjeta valor maximo 999.999.999').required().typeError("Numero de tarjeta es requerido"),
  ccExpiration: string("Fecha expiración tarjeta debe contener solo letras").required("Fecha expiración tarjeta es requerido"),
  ccCvv: number().min(100, "CVV de tarjeta valor minimo 100").max(999, 'CVV de tarjeta valor maximo 999').required().typeError("CVV de tarjeta es requerido")
})

const validateForm = async(dataForm) => {
  try {
    await userSchema.validate(dataForm)
    return { status: "success" }
  } catch (error) {
    return { status: "error", message: error.message }
  }
}

export default validateForm