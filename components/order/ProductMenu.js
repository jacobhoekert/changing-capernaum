import React, {useState, useEffect} from "react";
import Product from "./Product";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../../styles/order/product_menu.scss';

const ProductMenu = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductSelected, setIsProductSelected] = useState(false);
  const [clicked, setClicked] = useState(props.menuList[0][0]);

  const handleClick = (e) => {
    const selectedProductName = e.currentTarget.lastChild.firstChild.innerText;
    setSelectedProduct(selectedProductName);
    setIsProductSelected(true);
  }

  const handleCategoryClick = (e) => {
    setClicked(e.currentTarget.id);
  }
  
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

  const getProductList = () => {
    const clickedList = props.menuList.filter((categoryList) => {
      return categoryList[0] == clicked;
    });
    return clickedList[0][1];
  }

  const renderDisplay = () => {
    if (isProductSelected) {
      return (
        <Product
          setIsProductSelected={setIsProductSelected}
          selectedProduct={selectedProduct}
          productList={getProductList()}
        />
      )
    } else {
      return (
        <div className="product-menu">
          <div className="back-button" onClick={() => props.setIsPartnerSelected(!props.isPartnerSelected)}>
            <FontAwesomeIcon className="left-arrow-icon" icon={faArrowLeft}/>
            Back To All Places
          </div>
          <h2 className="product-menu-title">{props.name}</h2>
          <h3 className="product-menu-subtitle"style={{marginLeft: "20px", fontSize: "25px"}}>Product Menu</h3>
          <div className="menu-categories">
            {props.menuList.map((categoryList) => {
              return <div id={categoryList[0]} onClick={handleCategoryClick} className={`menu-category ${categoryList[0] == clicked && "selected-category"}`}>{categoryList[0]}</div>
            })}
          </div>
          <div className="product-card-container">
            {getProductList().map((product) => {
              return <div onClick={handleClick} style={{height: "100px"}} className="product-card">
                      {product.imgURL && <img src={product.imgURL} width="80px" height="80px"/> }
                      <div className="product-card-text">
                        <h3 className="product-card-name">{product.name}</h3>
                        <h4 className="product-card-price">{formatAmount(product.amount)}</h4>
                      </div>
                    </div>
            })}
          </div>
          <div style={{marginTop: "40px"}}className="back-button" onClick={() => props.setIsPartnerSelected(!props.isPartnerSelected)}>
            <FontAwesomeIcon className="left-arrow-icon" icon={faArrowLeft}/>
            Back To All Places
          </div>
        </div>
      )
    }
  }

  useEffect(() => {
    renderDisplay();
  }, [])
 
  return (
    <>
      {renderDisplay()}
    </>
  );
};

export default ProductMenu;
