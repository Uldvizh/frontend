import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Events from "./pages/Events";
import LoginAdmin from './pages/LoginAdmin';
import AfishaAdmin from './pages/AfishaAdmin';

function App() {

  return (
    <>
        <div>
            <>
            
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/events" element={<Events/>}/>
                    <Route path="/afishaAdmin" element={<AfishaAdmin/>}/>
                    <Route path="/loginDev" element={<LoginAdmin/>}/>
                </Routes>
            </>
        </div>
    </>
  )
}

export default App
