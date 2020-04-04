import React, {useState} from 'react';
import '../../styles/order/quantity_selector.scss';

const QuantitySelector = (props) => {

  return (
    <div className="quantity-selector">
      <div className="quantity-selector-container">
        <p>Quantity</p>
        <button onClick={() => props.quantity > 1 && props.setQuantity(props.quantity - 1)}>-</button>
        <p className="count" >{props.quantity}</p>
        <button onClick={() => props.setQuantity(props.quantity + 1)}>+</button>
      </div>
    </div>
  )
}

export default QuantitySelector;