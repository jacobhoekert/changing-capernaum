import React from 'react';
import Link from "next/link";
import '../../styles/cart/confirm_cart.scss';
import '../../styles/order/product_menu.scss';
import { useSelector, useDispatch} from 'react-redux';

const ConfirmCart = () => {
  const globalState = useSelector(state => state);
  const dispatch = useDispatch();
  
  const formatAmount = (amount) => {
    const amountString = "" + amount;
    let formattedAmount = "";
    if (amountString.length == 3) {
      const lastDigits = amountString.slice(1);
      formattedAmount = '$' + amountString[0] + '.' + lastDigits;
    } else if (amountString.length == 4) {
      const lastDigits = amountString.slice(2);
      formattedAmount = '$' + amountString[0] + amountString[1] + '.' + lastDigits;
    }
    return formattedAmount;
  }

  return (
    <div className="product-menu">
      <h1 className="confirm-cart-title">Cart</h1>
      <div className="product-card-container">
        {globalState.order.order.map((product) => {
          return  <div style={{height: "130px"}} className="product-card">
                    <img src={product.imgURL} width="80px" height="80px"/>
                    <div className="product-card-text">
                      <h3 className="product-card-name">{product.name}</h3>
                      <h4 className="product-card-price">{formatAmount(product.amount)}</h4>
                      <h4 className="product-card-quantity">Quantity: {product.quantity}</h4>
                    </div>
                  </div>
          })}
      </div>
      <div className="edit-message">If you want to edit your cart, unfortunately you have to restart your order by clicking the button below</div>
      <Link href="/"><button className="restart-button">Restart Order</button></Link>
    </div>
  )
}

export default ConfirmCart;