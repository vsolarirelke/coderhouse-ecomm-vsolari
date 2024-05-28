import { Link } from 'react-router-dom';
import './ElementEmpty.css'



const ElementEmpty = (type) => {

    const imgUrl = new URL(`./assets/bag_empty.png`, import.meta.url).href
    console.log("********TYPE: "+JSON.stringify(type))
    return (
        <div className="cart-container">
            <div className="container">
                <div className="row background-img">
                    <div className='col pt-100'>
                        <center>
                            
                            {type.type === "product" && (
                                <h5>Lo sentimos el producto no existe :(</h5>
                            )}

                            {type.type === "category" && (
                                <h5>Lo sentimos la categoria no existe :(</h5>
                            )}

                            {type.type === "cart" && (
                                <h5>Su carro esta vacio :(</h5>
                            )}

                            <br/>
                            <p>Echa un vistazo a lo último en accesorios.</p>
                            <Link to='/' className="add-to-cart" >Ver Novedades</Link>
                        </center>
                    </div>
                    <div className='col'>
                        <img src={ imgUrl } className="img-bag-empty img-fluid" />
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default ElementEmpty