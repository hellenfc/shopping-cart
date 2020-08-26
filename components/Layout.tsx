import React, { ReactNode } from 'react'
//import Link from 'next/link'
import Head from 'next/head'

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #F7F7F9
  }
`;

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({children , title = 'This is the default title'  }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* <header></header> */}
    <GlobalStyle />
    {children}
  </div>
)

export default Layout