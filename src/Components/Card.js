
import React from 'react';
import Usecustomhook from './Usecustomhook';
import Cardcomp from './Cardcomp';
import './Card.css';

export default function Card() {
  const { data, error, loading } = Usecustomhook('https://fakestoreapi.com/products');

  return (
    <div>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : data ? (
          data.map((val) => {
            return <Cardcomp id ={val.id} title={val.title} image={val.image} 
            category={val.category} price={val.price}/>;
          })
        ) : null}
      </div>
    </div>
  );
}
