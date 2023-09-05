const initialState = {
      products : [
        {
            id: 1,
            name: "Fire Boltt Ninja 2",
            img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
            amt: 1599,
            seller: "Boltt Store",
            catagory: "Watch",
        },
    
        {
            id: 2,
            name: "Noise Pulse Go",
            img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
            amt: 1300,
            seller: "Noise Store",
            catagory: "Watch",
        },
    
        {
            id: 3,
            name: "boAt Xtend Pro",
            img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
            amt: 2799,
            seller: "Rajesh Watchs",
            catagory: "Watch",
        },
        {
            id: 4,
            name: "Lenovo Tab M8",
            img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
            amt: 9270,
            seller: "Stonehenge Retail",
            catagory: "Tablets",
        },
        {
            id: 5,
            name: "Honor PAD X8",
            img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
            amt: 12999,
            seller: "Honor india",
            catagory: "Tablets",
        },
    
        {
            id: 6,
            name: "IKALL N9 ",
            img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
            amt: 3999,
            seller: "IKALL Store",
            catagory: "Tablets",
        },
    
        {
            id: 7,
            name: "Oppo Pad Air",
            img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
            amt: 15999,
            seller: "Oppo Store",
            catagory: "Tablets",
        },
        {
            id: 8,
            name: "Acer EK220Q",
            img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
            amt: 6249,
            seller: "Accer Store",
            catagory: "Monitors",
        },
        {
            id: 9,
            name: "Samsung 24",
            img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
            amt: 9799,
            seller: "Samsung Store",
            catagory: "Monitors",
        },
    
        {
            id: 10,
            name: "ZEBRONICS AC32FHD ",
            img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
            amt: 12799,
            seller: "ZEBRONICS Store",
            catagory: "Monitors",
        },
      ],

      cart : [],
      tablets:[],
      rangepriceItem : [],
      priceHighToLow : [],
      cartProducts : [],
      monitors :[]

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case state:

  if(state.cart.length == 0){
    return { ...state,}
  }
   

    case 'FILTER_ITEM' : 

    let add = [...state.products]
    console.log(add,"kkk")

    let index = add.filter((value)=>{
        console.log(value,"ppp")
       return value.catagory === "Watch"
    })

    

   

    return {...state, cart:index }

    case 'TEBLETS_ITEM' :

    let output = [...state.products]

    let tabletsPro = output.filter((value)=>{
        return value.catagory === "Tablets"
    })
  
    return {...state, tablets:tabletsPro }

    case 'PRICE_RANGE' :

  

    let rangeProducts = [...state.products];

    let range = rangeProducts.sort((a,b)=>{
        console.log(a,"vvvv")
            return a.amt - b.amt;
    })



   return {...state , rangepriceItem : range}
         
     case 'PRICE_HIGHTO_LOW' :

     let highlow = [...state.products];

     let highprice = highlow.sort((a,b)=>{
        console.log(a,"vvvv")
            return b.amt - a.amt;
    })

    return {...state , priceHighToLow : highprice}

    case 'ADD_TO_CART' : 
    
    let cart = [...state.cartProducts]

    if(cart.length == 0){
        cart.push({item:payload, count : 1});
        }else{
          let index = cart.findIndex((v)=> {

            return v.item.id == payload.id;
          });

          if(index>=0){
            cart = cart.map((v)=>{
              console.log(v , "kkkkkk");
    
              if(v.item.id == payload.id)
              {
                return { item: payload, count : v.count+1}
                
              }
              else
              {
                return v;
              }
    
            })
          }
    
          else
          {
    
            cart.push({item:payload, count : 1});
    
          }
        }

        return   {...state, cartProducts: cart}
        
        case 'MONITOR_ITEM':

        let monitorProduct = [...state.products];

        let mon = monitorProduct.filter((value)=>{
            return value.catagory === "Monitors"
        })


        return {...state, monitors:mon}

        case 'INC_ITEM' : 

        let plusItem = state.cartProducts.map((product)=>{
                      console.log(product,"oooo")

                      if(product.item.id == payload){
                        console.log(payload,"uuuu")
                        return {...product , count : product.count+1 }
                      }
                      return product

        })

        return {...state , cartProducts : plusItem}

        case 'DEC_ITEM' :

        let decrease  = state.cartProducts.map((product)=>{
                     if(product.item.id == payload){
                         
                      return {...product , count : product.count-1 } 


                     }

                     return product
        })

        return {...state , cartProducts : decrease};

        case 'REMOVE_ITEM' :

        let removeItem = state.cartProducts.filter((product)=>{

         return product.item.id !== payload;

        })

        return {...state , cartProducts : removeItem}

  default:
    return state
  }
}
