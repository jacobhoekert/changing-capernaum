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
  const [hasCoffeeOptions, setHasCoffeeOptions] = useState(false);
  const [hasFoodOptions, setHasFoodOptions] = useState(false);
  const [amount, setAmount] = useState(0);
  const [checked, setChecked] = useState(0);
  const [optionalChecked, setOptionalChecked] = useState([]);
  const [requiredOptions, setRequiredOptions] = useState([]);
  const [requiredDescriptions, setRequiredDescriptions] = useState([]);
  const [optionalOptions, setOptionalOptions] = useState([]);
  const [optionalDescriptions, setOptionalDescriptions] = useState([]);
  const [selectedRequiredOption, setSelectedRequiredOption] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(100,500);
  }, [])

  useEffect(() => {
    for (let product of props.productList) {
      if (product.name == props.selectedProduct) {
        setCurrentProduct(product);
        if (product.beanGrind) {
          setIsBeans(true);
        }
        if (product.coffeeOptions != undefined) {
          setHasCoffeeOptions(true);
        }
        if (product.foodOptions != undefined) {
          setHasFoodOptions(true);
        }
        if (product.requiredOptions != undefined) {
          setRequiredOptions(product.requiredOptions);
          setRequiredDescriptions(product.requiredDescriptions);
          setChecked(product.requiredOptions[0]);
        }
        if (product.optionalOptions != undefined) {
          setOptionalOptions(product.optionalOptions);
          setOptionalDescriptions(product.optionalDescriptions);
        }
      }
    }
  }, [])

  useEffect(() => {
    setAmount(currentProduct.amount);
  }, [currentProduct])

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

  const handleRequiredCheck = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const id = e.target.id;
    let description = "";
    if (checked) {
      setAmount(value);
      setChecked(id);
      for (let i = 0; i < requiredOptions.length; i++) {
        if (requiredOptions[i] == id) {
          description = requiredDescriptions[i];
        }
      }
      setSelectedRequiredOption(description);
      setOptionalChecked({});
    }
  }

  const handleOptionalCheck = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    const id = e.target.id;
    if (checked) {
      setOptionalChecked({
        ...optionalChecked,
        [id]: true
      });
      setAmount(parseInt(amount) + parseInt(value));
      
    } else {
      setAmount(parseInt(amount) - parseInt(value));
      setOptionalChecked({
        ...optionalChecked,
        [id]: false
      });
    }
  }

  const beanGrindList = [
    "Whole Bean",
    "Drip",
    "French Press/Cold Brew"
  ]

  const handleCartClick = () => {
    const keys = Object.keys(optionalChecked);
    let selectedOptionalOptions = [];
    for (let key of keys) {
      if (optionalChecked[key] == true) {
        selectedOptionalOptions.push(optionalDescriptions[key]);
      }
    }
    dispatch(addProductToCart({
      name: currentProduct.name,
      amount: amount,
      quantity: quantity,
      beanGrind: beanGrindList[beanGrind],
      details: details,
      sizeOrSelection: selectedRequiredOption,
      optionalAddons: selectedOptionalOptions
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
        {currentProduct.imgURL && <img src={currentProduct.imgURL} />}
        <div className="product-text">
          <h4 className="product-company">{currentProduct.company}</h4>
          <h2 className="product-name">{props.selectedProduct}</h2>
          <p className="product-amount">{formatAmount(amount)}</p>
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
          { hasCoffeeOptions && <>
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
          { hasFoodOptions && <>
                            <p className="options">Options</p>
                            <p className="options">{currentProduct.foodOptions}</p>
                            <hr style={{borderTop: "1px solid #969696", width: "80%", marginTop: "0px"}}/>
                            <p className="details-label">Enter which option and specify details</p>
                            <textarea
                              rows="5"
                              id="contact-message"
                              name="details"
                              value={details}
                              onChange={e => updateDetails(e)}
                              placeholder="Specify Option/details Here"
                            ></textarea>
                          </>
          }
          { currentProduct.requiredOptions != undefined && <>
                                <p style={{fontSize: "25px"}} className="options">Select Required Option</p>
                                {requiredOptions.map((price, index) => {
                                  return <div className="checkbox-container">
                                          <p className="checkbox-text">{requiredDescriptions[index]}</p>
                                          <input type="checkbox" value={price} id={index} name="prices" onChange={(e) => handleRequiredCheck(e)} checked={checked == index}></input>
                                        </div>
                                })}
                                <hr style={{borderTop: "1px solid #969696", width: "80%", marginTop: "0px"}}/>
                              </>
          }
          { currentProduct.optionalOptions != undefined && <>
                                <p style={{fontSize: "25px"}} className="options">Add Optional Options</p>
                                {optionalOptions.map((price, index) => {
                                  return <div className="checkbox-container">
                                          <p className="checkbox-text">{optionalDescriptions[index]}</p>
                                          <input type="checkbox" id={index} value={price} name="prices" onChange={(e) => handleOptionalCheck(e)} checked={optionalChecked[index]}></input>
                                        </div>
                                })}
                                <textarea
                                  rows="5"
                                  id="contact-message"
                                  name="details"
                                  value={details}
                                  onChange={e => updateDetails(e)}
                                  placeholder="Special Instructions Here"
                                ></textarea>
                                <hr style={{borderTop: "1px solid #969696", width: "80%", marginTop: "30px"}}/>
                                <p style={{fontSize: "25px"}} className="options">Total Price: {formatAmount(amount)} each</p>
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
