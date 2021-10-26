import API from "../api";

export function createProduct(product) {
    API.postAction(
        'products',
        product,
        (product) => console.log(product),
        (err) => console.log(err)
    );
}