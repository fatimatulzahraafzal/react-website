import React from 'react';
import { products } from '../products';
import ProductCart from '../components/productCart';
import About from '../components/about';
import Partners from '../components/partners';

const Home = () => {
  return (
    <div>
        <h1 className='heading'>About Us</h1>
        <About />
        <h1 className='heading'>Products</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
        <h1 className='heading'>Partner Institutions</h1>
        <Partners/>
    </div>
  );
}

export default Home;