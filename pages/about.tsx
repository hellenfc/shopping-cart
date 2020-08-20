import Link from 'next/link'
import Layout from '../components/Layout'

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #F7F7F9
  }
`;

const ThankYouPage = () => (
  <Layout title="Thank you page">
    <GlobalStyle />
    
    <h1>Thank you</h1>
    <p>Your order P001 has been registered</p>
    <p>
      <Link href="/">
        <a>Continue shopping</a>
      </Link>
    </p>
  </Layout>
);

export default ThankYouPage
