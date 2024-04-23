import React from 'react';
//const pathContextImage = import.meta.glob('./assets/')//require.context('./assets/', true)
//import pathImage from './assets/'

const CartProduct = ({id, image_url, name}) => {

    const imgUrl = new URL(`./assets/${image_url}`, import.meta.url).href
    
    return (
        <div className="col">
            <div className="card shadow-sm" style={{width: '18rem'}}> 
                {/* <img src={image_url} className="bd-placeholder-img card-img-top" width={200} height={286} /> */}
                {/* <img src={`./assets/${image_url}`} className="bd-placeholder-img card-img-top" width={200} height={286} />
                 */}
                {/* <img src={ pathContextImage(`./${image_url}`) } className="bd-placeholder-img card-img-top" width={200} height={286} />  */}
                
                <img src={ imgUrl } className="bd-placeholder-img card-img-top" width={200} height={286} />
                <div className="card-body">
                    <h6 className="card-title">{name}</h6>
                    <div className="text-center">
                        <a href="#" className="btn btn-secondary">Comprar</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct;