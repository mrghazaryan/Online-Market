import React, {useState} from "react";
import {createProduct} from "../../core/controllers/ProductAdd";
import ValidationInput from "../../components/shared/validation-input";
import {Link, useHistory} from "react-router-dom";

const ShopAdd = () => {
    const history = useHistory();
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [count, setCount] = useState("");
    const [productPicture, setProductPicture] = useState("");
    const [validations, setValidations] = useState({});


    const isValidProductName = () => {
        const re = /^([\w]{3,})/;
        return re.test(productName);
    };
    const isValidDescription = () => {
        const re = /^([\w]{3,})/;
        return re.test(description);
    };
    const isValidPrice = () => {
        const re = /^\+?[0-9]{3}$/;
        return re.test(price);
    };
    const isValidCount = () => {
        const re = /^\+?[0-9]{2}$/;
        return re.test(count);
    };
    const registerNewProduct = () => {
        const product = {
            productName,
            description,
            price,
            count,
            productPicture,
        }

        createProduct(product);
        history.push('/shop');
    };


    const productAdd = () => {
        const newValidations = {};
        if (!isValidProductName()) {
            newValidations.productName = 'Input a product name (ввести название продукта)';
        }
        if (!isValidDescription()) {
            newValidations.description = 'Input a description (Введите описание)';
        }
        if (!isValidPrice()) {
            newValidations.price = 'Price cannot be more than 999$ (Цена не может быть больше 999$)';
        }
        if (!isValidCount()) {
            newValidations.count = 'Products products cannot be more than 99 pcs.(Товара не должно быть больше 99 шт.)';
        }

        if (Object.keys(newValidations).length === 0) {
            registerNewProduct();
        }

        setValidations(newValidations);
    };

    return (
        <div className={'productAdd'}>
            <h1>Add Products</h1>
            <ValidationInput
                title={'Product Name:'}
                value={productName}
                onChangeHandler={setProductName}
                validationMsg={validations.productName}
            />
            <ValidationInput
                title={'Description:'}
                value={description}
                onChangeHandler={setDescription}
                validationMsg={validations.description}
            />
            <ValidationInput
                title={'Price:'}
                type={'number'}
                value={price}
                onChangeHandler={setPrice}
                validationMsg={validations.price}
            />
            <ValidationInput
                title={'Count:'}
                type={'number'}
                value={count}
                onChangeHandler={setCount}
                validationMsg={validations.count}
            />
            <label> Product :
                <input
                    type="file"
                    accept={"image/png, image/jpeg"}
                    onChange={setProductPicture}
                />
            </label>
            <br/>
            <Link to={'/shop'}>
                <button className="backBt">Back</button>
            </Link>
            <button className="productAddBt" onClick={productAdd}>Create Product</button>
        </div>
    );
}
export default ShopAdd;
