export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const DELETE_PRODUCT_FROM_CART = "DELETE_PRODUCT_FROM_CART";
export const INCREASE_CART_QUANTITY = "INCREASE_CART_QUANTITY";

export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: product
  };
};

export const deleteProductFromCart = (product) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: product
  };
};

export const increaseTotalCartQuantity = () => {
  return {
    type: INCREASE_CART_QUANTITY,
  };
};