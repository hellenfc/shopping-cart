import React from 'react'
// import Link from 'next/link'

import { IProduct } from '../../interfaces';

// recibir la funcion de handle
type Props = {
    product: IProduct
}

const Product = ({ product }: Props) => (
    <div>
        <p>--Product Item--</p>
        <p>Name: {product.name}</p>
        <p>Price: ${product.value}</p>
        <p>Amount: {product.amount}</p>
    </div>
)

export default Product
