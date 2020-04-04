import React from "react";
import Head from "next/head";
import Link from "next/link";
import '../styles/global.scss';
import NavBar from "../components/NavBar";
import Checkout from '../components/order/Checkout';
import DeliveryForm from "../components/DeliveryForm";
import { useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ConfirmCart from "../components/cart/ConfirmCart";

const Order = () => {
  const globalState = useSelector(state => state);

  return (
    <div>
      <Head>
        <title>Order Now - Changing Capernaum </title>
        <link rel="icon" href="" />
        <link href="https://fonts.googleapis.com/css?family=Dosis&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar order={true} href="/cart"/>
      { globalState.order.totalCartQuantity < 1
        && 
          <>
            <Link href="/order">
              <div style={{margin: "30px", cursor: "pointer"}}className="back-button">
                <FontAwesomeIcon className="left-arrow-icon" icon={faArrowLeft}/>
                Back To Ordering
              </div>
            </Link>
            <h1 style={{textAlign: "center", margin: "30px"}}>There's nothing in your cart!</h1>
          </>
      }
      { globalState.order.totalCartQuantity >= 1
        && 
          <>
            <ConfirmCart />
            <DeliveryForm />
          </>
      }
    </div>
  );
}

export default Order;
