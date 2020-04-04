import React from 'react';
import Link from "next/link";
import '../../styles/cart_banner.scss'
import {
  Button
} from "reactstrap";
import { useSelector} from 'react-redux';


const CartBanner = () => {
  const globalState = useSelector(state => state);

  return (
    <div className="cart-banner">
      <Link href="/cart"><Button className="d-block" color="primary">{`View Cart [ ${globalState.order.totalCartQuantity} ]`}</Button></Link>
    </div>
  )
}

export default CartBanner;