import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="col-md-6 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                    </a>
                    <span className="col-md-10 text-body-secondary">© {new Date().getFullYear()} Apple Store Ltda. {import.meta.env.VITE_NUM_VERSION}</span>
                
                    <ul className="nav col-md-12 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <Link to={'https://www.twitter.com'} target="_blank" className="text-body-secondary"><FaSquareXTwitter/></Link>
                        </li>
                        <li className="ms-3">
                            <Link to={'https://www.facebook.com'} target="_blank" className="text-body-secondary"><FaFacebook/></Link>
                        </li>
                        <li className="ms-3">
                            <Link to={'https://www.instagram.com'} target="_blank" className="text-body-secondary"><FaInstagram/></Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;


