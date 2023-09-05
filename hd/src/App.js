import logo from './logo.svg';
import './App.css';
import ProdDisplay from './other/ProdDisplay';
import FilterProd from './other/FilterProd';
import { Route, Routes } from 'react-router-dom';
import TabletsProd from './other/TabletsProd';
import PriceRange from './other/PriceRange';
import PriceHighToLow from './other/PriceHighToLow';
import CartItem from './other/CartItem';
import Monitor from './other/Monitor';

function App() {
  return (
    <div className="App">

    <Routes>
<Route path="/" element = {<ProdDisplay/>}></Route>
<Route path="/cartitem" element = {<FilterProd/>}></Route>
<Route path="/tabletsitem" element = {<TabletsProd/>}></Route>
<Route path="/pricerange" element = {<PriceRange/>}></Route>
<Route path="/highestprice" element = {<PriceHighToLow/>}></Route>
<Route path='/cartItems' element = {<CartItem/>}></Route>
<Route path='/monitors' element = {<Monitor/>}></Route>


</Routes>
     
    </div>
  );
}

export default App;
