import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InicioLogo from './componentes/InicioLogo';
import InicioPagina from './componentes/Iniciopagina';
import Iniciopagina2 from './componentes/Iniciopagina2';
import Iniciopagina3 from './componentes/Iniciopagina3';
import LLogin from './componentes/LLogin';
import Registrar from './componentes/Registrar';
import PhoneVerification from './componentes/PhoneVerification';
import NavBar from './componentes/NavBar';
import MenuPrincipal from './componentes/MenuPrincipal';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal con el componente InicioLogo */}
          <Route path="/" element={<InicioLogo />} />
          {/* Ruta para la página de inicio */}
          <Route path="/inicio" element={<InicioPagina />} />
          <Route path="/pagina2" element={<Iniciopagina2 />} />
          <Route path="/pagina3" element={<Iniciopagina3 />} />
          <Route path="/LLogin" element={<LLogin />} /> {/* Asegúrate de que sea /login */}
          <Route path="/Registrar" element={<Registrar />} />
          <Route path="/phoneverification" element={<PhoneVerification />} />
          <Route path="/MenuPrincipal" element={<MenuPrincipal />} />
          <Route path="/NavBar" element={<NavBar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

