import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PriceRange, PriceRangehightolow, cartItem, filterProd } from '../action/ProdAction';

export default function Monitor() {

    const flterProducts = useSelector(y=>y.items.monitors);
    console.log(flterProducts,"bbbbb")

    const ball = useSelector(y=>y.items.cartProducts);

    const disptch = useDispatch();
    const naviget = useNavigate();

    const handalPrice = ()=>{
        disptch(PriceRange())
        naviget("/pricerange")
    }

    const handalhightolow = ()=>{
        disptch(PriceRangehightolow())
        naviget("/highestprice")
    }

    const addtoCartItem = (product)=>{
        disptch(cartItem(product))
     
    }

    const otherPage =()=>{
        naviget("/cartItems")
    }

    const Allhandal = ()=>{
        naviget("/")
    }

    const handalClick = ()=>{
        disptch(filterProd())
        naviget("/cartitem");
    }

    const handalClick2 = ()=>{
        
        naviget("/tabletsitem")
        
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
       <li onClick={handalClick}>Watch</li>
       <li  onClick={handalClick2}>Tablets</li>
       <li  >Monitors</li>
      </ul>
      <h3>Price Range</h3>
      <div class="price">
     <button onClick={handalPrice}>low to high</button><br></br><br></br>
     <button onClick={handalhightolow}>high to low</button>
      </div>
    </div>

   
    <div className='content'>
    <div className='products'>
    

    {
        flterProducts.map((product)=>{

          
              return(
                <div class="product" data-id={product.id}>
                <div class="img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div class="product-details">
                  <span class="name">{product.name}</span>
                  <span class="amt">Rs.${product.amt}</span>
                  <span class="seller">{product.seller}</span>
                  <button class="add-to-cart" onClick={()=>addtoCartItem(product)}>Add to Cart</button>
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
