import { Link } from 'react-router-dom';
import './ItemDetailNotFound.css'



const ElementEmpty = () => {

    const imgUrl = new URL(`./assets/bag_empty.png`, import.meta.url).href

    return (
        <div className="item-detail-not-found-container">
            <div className="container">
                <div className="row background-img">
                    <div className='col pt-100'>
                        <center>
                            <h5>Lo sentimos el producto no existe :(</h5>
                            <br/>
                            <p>Echa un vistazo a lo último en accesorios.</p>
                            <Link to='/' className="add-to-cart" >Buscar otro producto</Link>
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