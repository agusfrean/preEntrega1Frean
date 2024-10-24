// src/components/ItemCard.jsx
import { Link } from 'react-router-dom';
import './css/ItemCard.css';  // Importa un archivo CSS para los estilos específicos de la card

const ItemCard = ({ id, name, description, price }) => {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="Precio">${price}</p>
      <Link to={`/item/${id}`} className="details-link">ver mas</Link>
    </div>
  );
};

export default ItemCard;
