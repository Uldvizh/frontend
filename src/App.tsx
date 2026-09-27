import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Events from "./pages/Events";
import Login from './pages/Login';

function App() {

  return (
    <>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-color mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">УлДвиж</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/events">Мероприятия</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Вход</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    </>
  )
}

export default App
