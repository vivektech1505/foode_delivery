import React, { useState } from 'react';
import Footer from './Footer';
import '../App.css';
import PhotoDetails from './PhotoDetails';

function ProductList({ product, addToCart }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [searched, setSearched] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = () => {
    const filtered = product.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredProduct(filtered);
    setSearched(true);
  };

  const handleAddToCart = (item, index) => {
    setDisabledButtons(prevState => [...prevState, index]);
    addToCart(item);
  };

  const handleProductClick = (item) => {
    setSelectedProduct(item);
  };

  const handleCloseDescription = () => {
    setSelectedProduct(null);
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
          filteredProduct.map((item, index) => (
            <div key={index} className="product-item">
              <img src={item.url} alt={item.name} onClick={() => handleProductClick(item)} />
              <p>{item.name}</p>
              {/* <Link to="/photo-details">
              <button>View Details</button>
            </Link> */}
              <button 
                onClick={()=> handleAddToCart(item, index)} 
                disabled={disabledButtons.includes(index)}>
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          product.map((item, index) => (
            <div key={index} className="product-item">
              <img src={item.url} alt={item.name} onClick={() => handleProductClick(item)} />
              <p>{item.name}</p>
              <button 
                onClick={()=> handleAddToCart(item, index)} 
                disabled={disabledButtons.includes(index)}>
                Add To Cart
              </button>
            </div>
          ))
        )}
      </div>
      <Footer />
      {selectedProduct && (
        <PhotoDetails 
          product={selectedProduct} 
          onClose={handleCloseDescription} 
          addToCart={addToCart}
        />
      )}
    </div>
  );
}

export default ProductList;
