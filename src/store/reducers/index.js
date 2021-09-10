import {ADD_TO_BAG, CHECK_OUT, REMOVE_ALL, REMOVE_FROM_BAG, SET_PRODUCTS} from "../action-types";

const initialState = {
  users: null,
  products: null,
  bag: []
};

const reducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: payload
      }
    }
    case ADD_TO_BAG: {
      const bag = [...state.bag];
      const products = [];
      for (const item of state.products) {
        if (item.id === payload.id) {
          if (item.count > payload.count) {
            products.push({...item, count: item.count - payload.count});
          }
        } else {
          products.push(item);
        }
      }
      const item = bag.find((product) => product.id === payload.id);
      if (item) {
        item.count += payload.count;
      } else {
        bag.push(payload);
      }
      return {
        ...state,
        bag,
        products
      }
    }
    case REMOVE_FROM_BAG: {
      const products = [...state.products];
      const bag = [];
      for (const item of state.bag) {
        if (item.id === payload.id) {
          if(item.count > payload.count) {
            bag.push({...item, count: item.count - payload.count});
          }
        } else {
          bag.push(item);
        }
      }
      const item = products.find((product) => product.id === payload.id);
      if (item) {
        item.count -= payload.count;
      } else {
        products.push(payload);
      }
      return {
        ...state,
        bag,
        products
      }
    }
    case REMOVE_ALL: {
      const products = [...state.products];
      for (const item of state.bag) {
        const product = products.find((product) => product.id === item.id);
        if(product){
          product.count += item.count;
        } else {
          products.push(item);
        }
      }
      return {
        ...state,
        bag: [],
        products
      }
    }
    case CHECK_OUT: {
      return {
        ...state,
        bag: []
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;