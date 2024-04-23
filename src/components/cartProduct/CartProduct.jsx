const CartProduct = ({id, image_url, name}) => {
    return (
        <div className="col">
            <div className="card shadow-sm" style={{width: '18rem'}}> 
                <img src={image_url} className="bd-placeholder-img card-img-top" width={200} height={286} />
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