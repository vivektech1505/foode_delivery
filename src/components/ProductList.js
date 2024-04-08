import React, { useState } from 'react';
import Footer from './Footer';

function ProductList({ product, addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    // Filter the product based on the search query
    const filtered = product.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredProduct(filtered);
    setSearched(true);
  };

  return (
    <div className='main'>
      <div className='searchBar'>
        <input 
          type='text' 
          placeholder='Search recipes...' 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button className='btn' onClick={handleSearch}>Search</button>
      </div>
      <div className="product-container">
        {searched ? (
          // Render the filtered product list if search button is clicked
          filteredProduct.map((item, index) => (
            <div key={index} className="product-item">
              <img  src={item.url} alt={item.name} />
              <p>{item.name}</p>
              <button onClick={()=> addToCart(item)}>Add To Cart</button>
            </div>
          ))
        ) : (
          // Render the original product list if search button is not clicked
          product.map((item, index) => (
            <div key={index} className="product-item">
              <img  src={item.url} alt={item.name} />
              <p>{item.name}</p>
              <button onClick={()=> addToCart(item)}>Add To Cart</button>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
