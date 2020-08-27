
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
  image: string,
  amount?: number
}

const CartPage = () => {
  const [shoppingList, setShoppingList] = useState<IProduct[]>([]);
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState<IProduct[]>([]);
  const [productTotalCost, setProductTotalCost] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [taxes, setTaxes] = useState(0);
  const [total, setTotal] = useState(0);

  const handleCompleteOrder = () => {
    // revisar si supera e valor de compra para poder enviar a la  siguiente pagina y desploquear el boton
    Router.push('/ThankYou')
  }

  const handleAddProduct = (productId: Number) => {
    // setShoppingList()
    const productInList = shoppingList.find(product => {
      return product.id === productId;
    });

    if (!productInList) {
      let product: IProduct = products.find(element => {
        return element.id === productId
      })!;
      if (product) {
        product['amount'] = 1;
        console.log('Agregandome')
        setShoppingList([...shoppingList, product]);
        // Add to productTotal
      }
      console.log('Adding product', shoppingList);
    }
  }

  const handleRemoveProduct = (productId: Number) => {
    setShoppingList(shoppingList.filter(item => item.id !== productId))
  }

  const searchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setUserInput(input);

    let results = products.filter(element => {
      return element.name.toLowerCase() === input.toLowerCase()
    })
    setSearchResult(results);
  }

  const renderCart = () => {
    console.log('userInput', userInput);
    if (userInput !== "") {
      //si hay texto en el box
      console.log('buscando', searchResult)
      if (searchResult.length === 0) {
        return <p>Producto no encontrado</p>
      } else {
        return searchResult.map((result, index) => {
          return (
            <li key={index}>
              <p>--Producto--</p>
              <p>Name: {result.name}</p>
              <p>Price: ${result.value}</p>
              <button type="button" onClick={() => { handleAddProduct(result.id) }}>Add</button>
            </li>
          )
        });
      }

    }
    if (shoppingList.length > 0 && userInput === "") {
      // no hay texto en el box y el shopping list mayor de 0
      // console.log('este es mi carrito')
      return shoppingList.map((result, index) => {
        return (
          <li key={index}>
            <p>--Producto--</p>
            <p>Name: {result.name}</p>
            <p>Price: ${result.value}</p>
            <p>Amount: {result.amount}</p>
            <button type="button" onClick={() => { handleRemoveProduct(result.id) }}>delete</button>
          </li>
        )
      });
    }
    if (shoppingList.length === 0) {
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
        <input type="text" placeholder='Search Products' onChange={(e) => { searchProduct(e) }}></input>
        <ul>
          {renderCart()}
        </ul>
      </div>
      <div>
        <p>Buy now and get it by date</p>
        <div>
          <p>Products: ${productTotalCost}</p>
          <p>Shipping cost: ${shippingCost}</p>
          <p>taxes: ${taxes}</p>
          <p>total: ${total}</p>
        </div>
      </div>
      <button onClick={() => { handleCompleteOrder() }}>Complete Order</button>
      {/* <p>
      <Link href="/ThankYou">
        <a>Thank you Page</a>
      </Link>
    </p> */}
    </Layout>
  )
};

export default CartPage
