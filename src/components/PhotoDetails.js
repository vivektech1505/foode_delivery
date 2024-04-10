import React from 'react';
import '../App.css'

function PhotoDetails({ product}) {
  

  return (
    <>
    <div className="photo-details">
      <div className='photo'>
        <img src={product.url} alt={product.name} />
        </div>
        <div className='description'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </div>
    <div className='other-details'>
      <div className='other-description'>
        <h1>{product.summeryName}</h1>
        <p>{product.Summary}</p>
      </div>
    </div>
    </>
  );
}

export default PhotoDetails;
