import Link from 'next/link'
import styled from "styled-components"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #F7F7F9
  }
`;

//background: #F7F7F9;
const CartPage = () => (
  <div title="Cart">
    <GlobalStyle />
    
    <h1>Cart 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default CartPage
