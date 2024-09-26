import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
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

      {/* Botão de menu visível apenas no mobile */}
      <button className={`MenuToggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>

      {/* Itens de navegação */}
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
