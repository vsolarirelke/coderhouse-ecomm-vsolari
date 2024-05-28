import { useEffect, useState } from 'react';
import CartWidget from '../cartWidget/CartWidget'
import svg_logo from './assets/logo_app_store.svg'
//import getCategories from '../../models/Categories';
import { getCategories } from '../../services/fetchers/fetchCategories';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {


    const [categories, setCategories] = useState([])

    useEffect(() => {

        const sessionData = sessionStorage.getItem('ssCategories');
        console.log("**********sessionData:"+sessionData)
        if(sessionData){
            console.log("ssCategories EXISTE")
            setCategories(JSON.parse(sessionData))
        }else{
            console.log("ssCategories NO EXISTE")
            getCategories()
            .then(response => {
                setCategories(response)
                sessionStorage.setItem('ssCategories', JSON.stringify(response));
            })
            .catch(error => {
                console.log(`Navbar - error: ${error}`)
                console.error(error)
            })
            .finally(() => {
                console.log("Navbar - finally")
            })
        }
        
    }, [])

    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top bg-light">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand"><img src={svg_logo}  width={50} height={50}/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {categories.map( category => 
                            <li key={"li_category_"+category.id} className="nav-item">
                                {/* <a key={"category_"+category.id} className="nav-link active" href="#">{category.name}</a> */}
                                <NavLink to={`/category/${category.id}`} className="nav-link active">{category.name}</NavLink>
                            </li>
                        )}
                        </ul>
                    </div>
                    < CartWidget/>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;