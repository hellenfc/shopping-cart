
import React, { useState, useEffect } from "react";

import Link from 'next/link'
import Router from 'next/router'

import styled from "styled-components";
import Layout from '../components/Layout';

const products = [
  { id: 1, name: "Yogurt", value: 23.5, image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterstudio.com%2Fblog%2Finstagram-image-sizes%2F&psig=AOvVaw1vAqkHYnBo-Rf3vs0pbxhx&ust=1598039165782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjp7_jFqusCFQAAAAAdAAAAABAD' },
  { id: 2, name: "Water", value: 20.5, image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterstudio.com%2Fblog%2Finstagram-image-sizes%2F&psig=AOvVaw1vAqkHYnBo-Rf3vs0pbxhx&ust=1598039165782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjp7_jFqusCFQAAAAAdAAAAABAD' },
  { id: 3, name: "Water", value: 40, image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterstudio.com%2Fblog%2Finstagram-image-sizes%2F&psig=AOvVaw1vAqkHYnBo-Rf3vs0pbxhx&ust=1598039165782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjp7_jFqusCFQAAAAAdAAAAABAD' },
  { id: 4, name: "Water", value: 12, image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterstudio.com%2Fblog%2Finstagram-image-sizes%2F&psig=AOvVaw1vAqkHYnBo-Rf3vs0pbxhx&ust=1598039165782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjp7_jFqusCFQAAAAAdAAAAABAD' },
  { id: 5, name: "Tea", value: 10, image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterstudio.com%2Fblog%2Finstagram-image-sizes%2F&psig=AOvVaw1vAqkHYnBo-Rf3vs0pbxhx&ust=1598039165782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjp7_jFqusCFQAAAAAdAAAAABAD' },
  { id: 6, name: "Coke", value: 10, image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbetterstudio.com%2Fblog%2Finstagram-image-sizes%2F&psig=AOvVaw1vAqkHYnBo-Rf3vs0pbxhx&ust=1598039165782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJjp7_jFqusCFQAAAAAdAAAAABAD' },
]

interface IProduct {
  id: number,
  name: string,
  value: number,
  image: string
}

const handleClick = () => {
  // console.log('Handle click');
  // revisar si supera e valor de compra para poder enviar a la  siguiente pagina y desploquear el boton
  Router.push('/ThankYou')

}


const CartPage = () => {
  const [userCart, setUserCart] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState<IProduct[]>([]);
  
  
  const searchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setUserInput(input);

    let results = products.filter(element => { 
       return element.name.toLowerCase() === input.toLowerCase()
    })
    setSearchResult(results);
    // console.log('result array',  results);
    // console.log('result array',  searchResult);
  }

  const renderCart = () => {
    console.log('userInput', userInput);
    
    if(userInput !== ""){
      //si hay texto en el box
      console.log('buscando', searchResult)
      if(searchResult.length === 0){
        return <p>Producto no encontrado</p>
      }else{
        return searchResult.map((result, i) => {
          console.log('resutl')
          return (
            <div>
              <p>--Producto--</p>
              <p>Name: ${result.name}</p>
              <p>Price: ${result.value}</p>
            </div>
          )
        });
      }
      
    }  
    if (userCart.length > 0 && userInput === ""){
      // si no hay texto en el box
      // console.log('este es mi carrito')
      return <p>Este es mi carrito</p>
    }
    if (userCart.length === 0) {
      return (
        <div>
          <p>Your cart is empty</p>
          <p>seems like you haven't chosen what to buy...</p>
        </div>
      )
    } 
  }

  return (
    <Layout title="Cart">
      <h1>Cart 👋</h1>
      <div>
        <input type="text" placeholder='Search Products' onChange={(e)  => { searchProduct(e)}}></input>
        <div>
          {renderCart()}
        </div>
      </div>
      <div>
        <p>Buy now and get it by date</p>
        <div>
          <p>Products</p>
          <p>Shipping cost</p>
          <p>taxes</p>
          <p>total</p>
        </div>
      </div>
      <button onClick={() => { handleClick() }}>Add</button>
      {/* <p>
      <Link href="/ThankYou">
        <a>Thank you Page</a>
      </Link>
    </p> */}
    </Layout>
  )
};

export default CartPage
