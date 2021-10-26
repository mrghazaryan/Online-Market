import React, {useState} from 'react';

const BagProduct = ({product}) => {
    const {count, productPicture, productName, description, price} = product;
    const [currentCount, changeCount] = useState(1);

    const onChangeCount = ({target: {value}}) => {
        if (value > 0 && value <= count) {
            changeCount(+value);
        }
    };

    return (
        <div className={'product'}>
            <img src={require(`../../assets/images/${productPicture}`).default} alt={productName}/>
            <h2>{productName}</h2>
            <p>{description}</p>
            <p>
                <span>{price}</span>
                <input
                    type={'number'}
                    value={currentCount}
                    onChange={onChangeCount}
                />
            </p>
            <p>Amount: {price * count}</p>
        </div>
    )
}

export default BagProduct;