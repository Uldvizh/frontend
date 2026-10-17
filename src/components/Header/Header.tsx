import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png"
import "./Header.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <img className='logoHeader' src={Logo} alt="" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-label="Переключить навигацию"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          id="mainNavbar"
          aria-labelledby="mainNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white" id="mainNavbarLabel">
              УлДвиж
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Закрыть"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Стендапы
                </Link>
              </li>

              
               

              <li className="nav-item">
                <Link className="nav-link" to="/loginDev">
                  Фестивали
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/afishaAdmin">
                  Концерты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;