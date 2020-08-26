import Link from 'next/link';

import styled from "styled-components";
import Layout from '../components/Layout';


const Title = styled.h1`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  text-align: center;
  color: #333333;
`;

const ThankYouPage = () => (
  <Layout title="Thank you">
    <Title>Thank you</Title>
    <p>Your order P001 has been registered</p>
    <p>
      <Link href="/">
        <a>Continue shopping</a>
      </Link>
    </p>
  </Layout>
);

export default ThankYouPage
