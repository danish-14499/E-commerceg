import { data } from 'autoprefixer';
import React,{createContext,useState,useEffect} from 'react';

export const ProductContext=createContext();

const ProductProvider = ({children}) => {
  const [products,SetProducts]=useState([]);
  useEffect(()=>{
const fetchProducts=async()=>{
    const response=await fetch('https://fakestoreapi.com/products');
    const data=await response.json();
    SetProducts(data);
};
console.log(data);
fetchProducts();
  },[]);
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider ;
