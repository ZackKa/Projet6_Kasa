import { Link } from 'react-router-dom'
import HomeLogo from '../../assets/LOGO.png'

function Header() {
    return(
        <header>
            <img src={HomeLogo} alt="Logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A propos</Link>
            </nav>
      </header>
    )
}
export default Header