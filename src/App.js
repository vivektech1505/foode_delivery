import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartList from './components/CartList';

function App() {
  const [product, setProduct] = useState([
    {
      url : 'https://img.spoonacular.com/recipes/640461-556x370.jpg',
      name : "Crawfish Cake Sl"
    },
    {
      url : 'https://img.spoonacular.com/recipes/640383-556x370.jpg',
      name : "Cranberry Margar"
    },
    {
      url : 'https://img.spoonacular.com/recipes/636632-556x370.jpg',
      name : "Buttery Pull Apa"
    },
    {
      url : 'https://img.spoonacular.com/recipes/642597-556x370.jpg',
      name : "Farro & Leek Sou"
    },
    {
      url : 'https://img.spoonacular.com/recipes/715562-556x370.jpg',
      name : "Loaded Baked Pot"
    },
    {
      url : 'https://img.spoonacular.com/recipes/634180-556x370.jpg',
      name : "Banana Smoothie "
    },
    {
      url : 'https://img.spoonacular.com/recipes/649611-556x370.jpg',
      name : "Lemon Delicious"
    },
    {
      url : 'https://img.spoonacular.com/recipes/663588-556x370.jpg',
      name : "Tomato Cutlets"
    },
    {
      url : 'https://img.spoonacular.com/recipes/642614-556x370.jpg',
      name : "Fast Tiramisu"
    },
    {
      url : 'https://img.spoonacular.com/recipes/664311-556x370.jpg',
      name : "Vanilla Cream Ca"
    }, 
    {
      url : 'https://img.spoonacular.com/recipes/663092-556x370.jpg',
      name : "Thai Coconut Cur"
    },
    {
      url : 'https://img.spoonacular.com/recipes/632660-556x370.jpg',
      name : "Apricot Glazed A"
    },
    {
      url : 'https://img.spoonacular.com/recipes/632660-556x370.jpg',
      name : "Apricot Glazed A"
    },
    {
      url : 'https://img.spoonacular.com/recipes/654953-556x370.jpg',
      name : "Pasta with Spicy"
    },{
      url : 'https://img.spoonacular.com/recipes/646361-556x370.jpg',
      name : "Hawaiian Cookie "
    },
    {
      url : 'https://img.spoonacular.com/recipes/663588-556x370.jpg',
      name : "Tomato Cutlets"
    }

  ])

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const addToCart = (data)=> {
  const isDataInCart = cart.some(item => item.name === data.name);


if (!isDataInCart) {
  setCart([...cart, data]);
  setShowMessage(false)
} else {
  setShowMessage(true)
}
  }

  const removeCart = (dataToRemove) => {
  const updatedCart = cart.filter(item => item.name !== dataToRemove.name);
  setCart(updatedCart);
  if(updatedCart.length === 0) {
    setShowMessage(true)
  }
  }
  const handleShow = (value) =>{
    setShowCart(value)
  }

  return (
    <div>
   <Header count={cart.length} handleShow = {handleShow} />
  

   {
    showCart ? (
      <>
       <CartList cart = {cart}  removeCart = {removeCart}/>
       {showMessage && <h3 className='sms'>Nothing in the favorites</h3>}
       </>
      ) : (
    <ProductList product = {product} addToCart = {addToCart}/> )
   }
    </div>
  );
}
export default App;
