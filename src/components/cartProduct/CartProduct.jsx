const CartProduct = ({id, image_url, name}) => {
    return (
        <div class="col">
            <div className="card shadow-sm" style={{width: '18rem'}} key={`cart_${id}`}> 
                <img src={image_url} className="bd-placeholder-img card-img-top" />
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