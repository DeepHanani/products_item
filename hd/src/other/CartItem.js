import React from 'react'
import './CartItem.css'
import { useDispatch, useSelector } from 'react-redux';
import { DecItem, IncItem, RemoveItem } from '../action/ProdAction';

export default function CartItem() {
    const ball = useSelector(y=>y.items.cartProducts);

    const dispatch = useDispatch();

    const dicCount = (value)=>{
     if(value.count>0){
         dispatch(DecItem(value))
     }
 
 }
 
 
 const incCount = (value)=>{
 
 dispatch(IncItem(value))
 }

 const removeItem = (value)=>{
    dispatch(RemoveItem(value));
}


  return (
    <>
    <div className='privat'>
    
    <div className='cartContainer'>
    {
        ball.map((value)=>{

           
            

            return(
                <div className='miniContainer'>
                <div className='cartImgDiv'>
                <img src={value.item.img}/>
                </div>
                <div className='contantDiv'>

                <div className='titleDiv'>
                <h3>{value.item.name}</h3>
                </div>
                <div className='btnContainer'>
                <button className='decBtn' onClick={()=>dicCount(value)}>-</button>
                <span>{value.count}</span>
                <button  className='plusBtn' onClick={()=>incCount(value)}>+</button>
                <button className='removeBtn' onClick={()=>removeItem(value)}>Remove</button>
                
                </div>
                <div>
                <h3>Price : {value.item.amt*value.count} Rs</h3>
                </div>
      
                </div>
                </div>
                
            )

        })
    }

    </div>

    <h1 className='errorMes'></h1>
    </div>
      
    </>
  )
}
