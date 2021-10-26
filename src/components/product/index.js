import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addToBag} from '../../store/action-creators';

const Product = ({product}) => {
    const {count, productPicture, productName, price} = product;
    const [currentCount, changeCount] = useState(1);
    const dispatch = useDispatch();
    const onAddToBag = () => {
        dispatch(addToBag({...product, count: currentCount}));
    };


    const onChangeCount = ({target: {value}}) => {
        if (value > 0 && value <= count) {
            changeCount(+value);
        }
    };

    return (
        <div className={'product'}>
            <img src={require(`../../assets/images/${productPicture}`).default} alt={productName}/>
            <h1>{productName}</h1>
            <p>
                <span>{price} $</span>
                <input
                    type={'number'}
                    value={currentCount}
                    onChange={onChangeCount}
                />
            </p>
            <button
                onClick={onAddToBag}
            >
                Add to bag
            </button>
        </div>
    )
}

export default Product;