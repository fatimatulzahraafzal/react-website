import React from 'react';
import { products } from '../products';
import ProductCart from '../components/productCart';

const Products = () => {
  return (
    <div>
      <h1 className='heading'>Products</h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {products.map((product, key) => 
          <ProductCart key={key} data={product}/>
        )}
      </div>
    </div>
  );
}

export default Products;

