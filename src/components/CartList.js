import React from 'react'

function CartList({cart, removeCart}) {
  return (
    <div>
         <div className="product-container">
        {cart.map((cartItem, cartIndex) => (
          <div key={cartIndex} className="product-item">
            <img src={cartItem.url} alt={cartItem.name} />
            <p>{cartItem.name}</p>
            <button onClick={()=> removeCart(cartItem)}>Remove To Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartList