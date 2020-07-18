import React from 'react';
import './App.css';
import ProductTable from "./components/ProductTable"
import PropTypes from 'prop-types'

const Products = [
  {category:"Electronics",name:"Laptop",price:1500},
  {category:"Clothes",name:"Black-T-Shirt",price:35},
  {category:"Electronics",name:"Phone",price:600},
];


function App() {
  return (
    <>
   <ProductTable  Products={Products}/>
    </>
  );
}
App.propTypes = {
  category:PropTypes.string,
  name:PropTypes.string,
  price:PropTypes.number
  
}



export default App;
