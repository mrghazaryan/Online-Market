import {ADD_TO_BAG, CHECK_OUT, REMOVE_ALL, REMOVE_FROM_BAG, SET_PRODUCTS} from '../action-types'

export const setProducts = (payload) => ({
  type: SET_PRODUCTS,
  payload
});

export const addToBag = (payload) => ({
  type: ADD_TO_BAG,
  payload
});

export const removeFromBag = (payload) => ({
  type: REMOVE_FROM_BAG,
  payload
});

export const removeAll = () => ({
  type: REMOVE_ALL,
});

export const checkOut = () => ({
  type: CHECK_OUT,
});
