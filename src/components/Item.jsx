import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <div className="item-card">
      <Link to={`/item/${item.id}`}>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
      </Link>
    </div>
  );
};

export default Item;
