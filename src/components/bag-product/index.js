import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {removeFromBag} from '../../store/action-creators';

const BagProduct = ({product}) => {
  const {count, imgName, title, description, price} = product;
  const [currentCount, changeCount] = useState(1);
  const dispatch = useDispatch();
  const onRemoveFromBag = () => {
    dispatch(removeFromBag({...product, count: currentCount}));
  };

  const onChangeCount = ({target: {value}}) => {
    if (value > 0 && value <= count) {
      changeCount(+value);
    }
  };

  return (
    <div className={'product'}>
      <img src={require(`../../assets/images/${imgName}`).default} alt={title}/>
      <h2>{title}</h2>
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
      <button
        onClick={onRemoveFromBag}
      >
        Remove from bag
      </button>
    </div>
  )
}

export default BagProduct;