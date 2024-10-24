import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">BookStore</Link>
      </div>
      <ul className="categories">
        <li><Link to="/category/ficcion">Ficcion</Link></li>
        <li><Link to="/category/novelas">Novelas</Link></li>
        <li><Link to="/category/poesia">Poesia</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;

