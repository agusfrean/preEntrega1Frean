import { useParams } from 'react-router-dom';
import mockData from '../mockData';  // Mock de datos

const ItemDetailContainer = () => {
  const { id } = useParams();
  const item = mockData.find(item => item.id === id);

  return (
    <div className="item-detail">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemDetailContainer;
