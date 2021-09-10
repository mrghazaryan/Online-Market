import React from 'react';
import {bagSelector} from "../../store/selectors/bag";
import {useDispatch, useSelector} from "react-redux";
import BagProduct from "../../components/bag-product";
import {checkOut, removeAll} from "../../store/action-creators";
import {updateProducts} from "../../core/controllers/bag";
import {productsSelector} from "../../store/selectors/shop";

const Bag = () => {

  const dispatch = useDispatch();
  const bag = useSelector(bagSelector);
  const products = useSelector(productsSelector);

  const onCheckOut = () => {
    const check = bag.reduce((accumulator, currentValue) => (accumulator + currentValue.count * currentValue.price), 0);
    updateProducts(products);
    alert(`success ${check}`);
    dispatch(checkOut());
  };

  return (
    <div className="bag">
      {
        bag.map((product) => (
          <BagProduct
            key={product.id}
            product={product}
          />
        ))
      }
      <hr/>
      <button
        onClick={() => dispatch(removeAll())}
      >
        Remove all
      </button>
      <button
        onClick={onCheckOut}
      >
        Check out
      </button>
    </div>
  )
}

export default Bag;