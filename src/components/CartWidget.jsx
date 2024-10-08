import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="cart" className="cart-icon">🛒</span>
      <span className="cart-count">3</span> {/* Número hardcodeado */}
    </div>
  );
};

export default CartWidget;
