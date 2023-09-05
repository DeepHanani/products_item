import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PriceRangehightolow, monitorPro } from '../action/ProdAction';
import './ProdDisplay.css'

export default function PriceRange() {

    const gill = useSelector(y=>y.items.rangepriceItem);
    const ball = useSelector(y=>y.items.cartProducts);
    const naviget = useNavigate();

    const disptch = useDispatch();

    const Allhandal =()=>{
        naviget("/")
   }

   const handalClick2 = ()=>{
       naviget("/tabletsitem")
   }

   const handalClick4 = ()=>{
     naviget("/cartitem")
   }

   const handalPrice = ()=>{
 
    naviget("/pricerange")
}

const otherPage =()=>{
    naviget("/cartItems")
}

const handalhightolow = ()=>{
    disptch(PriceRangehightolow())
    naviget("/highestprice")
}

const handalmon = ()=>{
    disptch(monitorPro())
    naviget("/monitors")
}
  return (
    <>
    <div class="containenr-1">
    <ul>
      <li><a>Home</a></li>
      
    </ul>
    <div id="cart-icon">
    <i  className="fa-solid fa-cart-shopping" style={{color: "orange"}}  onClick={otherPage}>{ball.length}</i>
    </div>
    <div id="cart-notification" style={{display: "none"}}>
      <h3>Item Added to Cart!</h3>
    </div>

  </div>

   <div className='container'>

   <div class="sidebar">
      
      <h3>Category</h3>
      <ul class="category-list">
       <li onClick={Allhandal}>All</li>
       <li onClick={handalClick4}>Watch</li>
       <li  onClick={handalClick2}>Tablets</li>
       <li onClick={handalmon}>Monitors</li>
      </ul>
      <h3>Price Range</h3>
      <div class="price">
      <button onClick={handalPrice}>Low to High</button><br></br><br></br>
      <button onClick={handalhightolow}>High to Low</button>
      </div>
    </div>

   
    <div className='content'>
    <div className='products'>
    

    {
        gill.map((product)=>{

          
              return(
                <div class="product" data-id={product.id}>
                <div class="img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div class="product-details">
                  <span class="name">{product.name}</span>
                  <span class="amt">Rs.${product.amt}</span>
                  <span class="seller">{product.seller}</span>
                  <button class="add-to-cart">Add to Cart</button>
                </div>
              </div>
              )
        })
    }
    </div>
    </div>
   
   </div>
   </>
  )
}
