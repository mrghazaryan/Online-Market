import store from "../../store";
import {setProducts} from "../../store/action-creators";
import API from "../api";

export function getProducts() {
  API.getAction(
    'products',
    (products) => {
      store.dispatch(setProducts(products));
    },
    (err) => {
      console.log(err);
    }
  )
} 
