import { 
  ADD_PRODUCT_TO_CART,
  INCREASE_CART_QUANTITY,
  DELETE_PRODUCT_FROM_CART,
} from '../actions/orderActions';

const initialState = {
  totalCartQuantity: 0,
  order: []
}

function orderReducer(state = initialState, action) {
  const {type, payload} = action;

  switch(type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        order: [...state.order, payload]
      }
    case INCREASE_CART_QUANTITY: 
      return {
        ...state,
        totalCartQuantity: state.totalCartQuantity + 1
      }
    default:
      return state
  }
}

export default orderReducer;