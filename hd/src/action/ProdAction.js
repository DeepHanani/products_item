export const filterProd = (value) => ({
  type: 'FILTER_ITEM',
  payload:value
})

export const tablets = (value) => ({
  type: 'TEBLETS_ITEM',
  payload :value
})

export const PriceRange = (value) => ({
  type: 'PRICE_RANGE',
  payload : value
})

export const PriceRangehightolow = (value) => ({
    type: 'PRICE_HIGHTO_LOW',
    payload : value
  })

  export const cartItem = (value) => ({
    type: 'ADD_TO_CART',
    payload : value
  })

  export const monitorPro = (value) => ({
    type: 'MONITOR_ITEM',
    payload :value
  })

  export const IncItem = (value) => ({
    type: 'INC_ITEM',
    payload : value.item.id
  })
  
  export const DecItem = (value) => ({
    type: 'DEC_ITEM',
    payload : value.item.id
  })

  export const RemoveItem = (value) => ({
    type: 'REMOVE_ITEM',
    payload : value.item.id
  })

