import { Link } from 'react-router-dom';

const ItemBreadcrumb = ({category_id, category_name, product_title}) => {
    


    return (
        <nav className="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={`/`}>Inicio</Link></li>
                <li className="breadcrumb-item"><Link to={`/category/${category_id}`}>{category_name}</Link></li>
                {product_title && (
                    <li className="breadcrumb-item active" aria-current="page">{product_title}</li>
                )}
            </ol>
        </nav>
    )
}

export default ItemBreadcrumb;