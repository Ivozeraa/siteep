import { useState } from 'react';
import "./css/Header.css";
import './css/Responsivo.css';

function HeaderTeste() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="HeaderGeral">
      <h1 className="NomeEscola">EEEP Ana Zélia</h1>
      <button className="MenuToggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`Navbar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Inicio</li>
          <li>Cursos</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderTeste;
