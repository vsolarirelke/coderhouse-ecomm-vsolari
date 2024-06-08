import { Link } from 'react-router-dom';

const ItemFinish = () => {
    
    return (
        <>
            <div className="row pt-10 justify-content-md-center">
                <div className="col-md-6 offset-md-4">
                    
                </div>
            </div>
            <div className="row pt-10 justify-content-md-center">
                <div className="offset-1 col-5">
                    <Link to='/cart' className="add-to-cart" >Terminar compra</Link>
                </div>
            </div>
        </>
    )
}

export default ItemFinish;