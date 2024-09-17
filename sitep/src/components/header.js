import styles from "./css/Header.css"

function HeaderTeste() {
  return(
    <header className="HeaderGeral"> 
        <h1 className="NomeEscola">EEEP Ana Zélia</h1>
        <nav className="Navbar">
            <ul>
                <li>Inicio</li>
                <li>Cursos</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderTeste;
