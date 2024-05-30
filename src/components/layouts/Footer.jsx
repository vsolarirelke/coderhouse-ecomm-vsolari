import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <div className="col-md-6 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                    </a>
                    <span className="col-md-10 text-body-secondary">© {new Date().getFullYear()} Apple Store Ltda. v2.0.1</span>
                
                    <ul className="nav col-md-12 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="#"><FaSquareXTwitter /></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><FaFacebook/></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="#"><FaInstagram/></a></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;


