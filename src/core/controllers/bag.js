import API from "../api";

export function updateProducts(products) {
  API.putAction(
    'products',
    products,
    () => {
      console.log(products);
    },
    (err) => {
      console.log(err);
    }
  )
}
