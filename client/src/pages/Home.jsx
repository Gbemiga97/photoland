import React from 'react';
import useFetch from '../hooks/useFetch';
import { ProductSlider } from '../components';

const Home = () => {
  //get new products
  const {data} = useFetch('/products?populate=*&filters[isNew]=true')
  


  return (
    <div className='mb-18'>
      <div className="container mx-auto">
        <h2 className='h2 mb-6 text-center xl:text-left'>
          Latest Products</h2>
      </div>
      <ProductSlider data={data} />
    </div>
  );
};

export default Home;
