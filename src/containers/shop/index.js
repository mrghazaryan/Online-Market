import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Product from '../../components/product';
import {getProducts} from '../../core/controllers/shop';
import {productsSelector} from '../../store/selectors/shop';

const Shop = () => {

  const products = useSelector(productsSelector);

  useEffect(() => {
    if(products === null){
      getProducts();
    }
  }, []);

  if (!products) {
    return <h2>Loading...</h2>
  }

  return (
    <div className={'shop'}>
      {
        products.map((product) => (
          <Product
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
}

export default Shop;