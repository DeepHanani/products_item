import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PriceRange, PriceRangehightolow, cartItem, monitorPro } from '../action/ProdAction';


export default function TabletsProd() {

    const flterProducts = useSelector(y=>y.items.tablets);
    const ball = useSelector(y=>y.items.cartProducts);
     
    console.log(flterProducts,"jjjj")
    const naviget = useNavigate();
    const disptch = useDispatch();
    
    const Allhandal =()=>{
        naviget("/")
   }
    
   const handalClick = ()=>{
   
    naviget("/cartitem");
}


const addtoCartItem = (product)=>{
    disptch(cartItem(product))
 
}

const otherPage =()=>{
    naviget("/cartItems")
}

const handaltab = ()=>{
    disptch(monitorPro())
    naviget("/monitors")
}

const handalPrice = ()=>{
    disptch(PriceRange())
    naviget("/pricerange")
}

const handalhightolow = ()=>{
    disptch(PriceRangehightolow())
    naviget("/highestprice")
}


  return (
    <>
    <div class="containenr-1">
    <ul>
      <li><a href="#home">Home</a></li>
   
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
       <li>Tablets</li>
       <li onClick={handaltab}>Monitors</li>
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
