//Concept Redux

import { legacy_createStore } from "redux";

//reducer
const cartReducer = (
  state = {
    // cart: [],
    cart: [{ id: 1, qty: 2 }],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// store (membuat store)
const store = legacy_createStore(cartReducer); //disarankan menggunakan redux tool
console.log("ONCREATE STORE : ", store.getState());

// suscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

// dispacth
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 200 } };
store.dispatch(action1);
const action2 = { type: "ADD_TO_CART", payload: { id: 12, qty: 10 } };
store.dispatch(action2);
