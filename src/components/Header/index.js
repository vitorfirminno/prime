import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/">Aldeia</Link>
            <Link className='favoritos' to="/favoritos">tchosen</Link>
        </header>
    );
};

export default Header;