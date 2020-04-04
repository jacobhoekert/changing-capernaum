import React, {useState, useEffect} from "react";
import DropDownMenu from '../DropDownMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../styles/order/product.scss';
import QuantitySelector from "./QuantitySelector";
import { useDispatch, useSelector} from 'react-redux';
import { addProductToCart, increaseTotalCartQuantity} from '../../redux/actions/orderActions';

const Product = (props) => {
  const [currentProduct, setCurrentProduct] = useState({});
  const [beanGrind, setBeanGrind] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [hasAddedToCart, setHasAddedToCart] = useState(false);
  const [isBeans, setIsBeans] = useState(false);
  const [details, setDetails] = useState("");
  const [hasDetails, setHasDetails] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(100,500);
  }, [])

  useEffect(() => {
    for (let product of props.menuList) {
      if (product.name == props.selectedProduct) {
        setCurrentProduct(product);
        if (product.beanGrind) {
          setIsBeans(true);
        }
        if (product.details != undefined) {
          setHasDetails(true);
        }
      }
    }
  }, [])

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

  const beanGrindList = [
    "Whole Bean",
    "Drip",
    "French Press/Cold Brew"
  ]

  const handleCartClick = () => {
    dispatch(addProductToCart({
      name: currentProduct.name,
      description: currentProduct.description,
      amount: currentProduct.amount,
      currency: "usd",
      quantity: quantity,
      imgURL: currentProduct.imgURL,
      beanGrind: beanGrindList[beanGrind],
      details: details
    }));
    dispatch(increaseTotalCartQuantity());
    setHasAddedToCart(true);
    setTimeout(() => {
      setHasAddedToCart(false);
    }, 1000)
  }

  const updateDetails = (e) => {
    const { value } = e.target;
    setDetails(value);
  }

  return (
    
    <div className="product-container">
      <div className="back-button" onClick={() => props.setIsProductSelected(false)}>
        <FontAwesomeIcon className="left-arrow-icon" icon={faArrowLeft}/>
        Back To Products
      </div>
      <div className="product">
        <img src={currentProduct.imgURL} />
        <div className="product-text">
          <h4 className="product-company">{currentProduct.company}</h4>
          <h2 className="product-name">{props.selectedProduct}</h2>
          <p className="product-amount">{formatAmount(currentProduct.amount)}</p>
          <p className="product-description">{currentProduct.description}</p>
          <hr style={{borderTop: "1px solid #969696", width: "80%"}}/>
          { isBeans &&  <>
                          <p className="grind-size">Whole Bean or Ground?</p>
                          <DropDownMenu 
                            list={beanGrindList}
                            selectedItem={beanGrind}
                            setSelectedItem={setBeanGrind}
                          />
                        </>
          }
          { hasDetails && <>
                            <p className="options">Other Milk Options (+ $0.60 each): Almond, Coco, Breve, Oat</p>
                            <p className="options">Syrup Options (+ $0.60 each): Vanilla, Honey, Matcha, Butterscotch, Lavender honey, Rosemary Rooibus </p>
                            <p className="options">Extra Shots (+ $0.60 each)</p>
                            <hr style={{borderTop: "1px solid #969696", width: "80%", marginTop: "0px"}}/>
                            <p className="details-label">Specify Details (specify if iced, any options, extra shots, whip, etc.</p>
                            <textarea
                              rows="5"
                              id="contact-message"
                              name="details"
                              value={details}
                              onChange={e => updateDetails(e)}
                              placeholder="Specify Details Here"
                            ></textarea>
                            <p className="additional-message">At this time, additional options costs will need to be accepted after we deliver with cash or Venmo</p>
                          </>
          }
         
          <QuantitySelector 
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <button onClick={handleCartClick} className="cart-button">ADD TO CART</button>
          { hasAddedToCart && <p>Item Added to Cart</p>}
        </div>
      </div>
      <div className="back-button" onClick={() => props.setIsProductSelected(false)}>
        <FontAwesomeIcon className="left-arrow-icon" icon={faArrowLeft}/>
        Back To Products
      </div>
    </div>
  )
};

export default Product;
