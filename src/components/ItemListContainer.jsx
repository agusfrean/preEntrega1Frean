// src/components/ItemListContainer.jsx
import { useParams } from 'react-router-dom';
import mockData from '../mockData';  // Los datos de los libros
import ItemCard from './ItemCard';   // Importa el componente de las cards
import './css/ItemListContainer.css';    // Agrega un archivo CSS para organizar las cards en una grid

const ItemListContainer = ({ greeting }) => {
  const { id } = useParams();
  const items = id ? mockData.filter(item => item.category === id) : mockData;

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <div className="item-grid">
        {items.map(item => (
          <ItemCard 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            description={item.description} 
            price={item.price} 
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
