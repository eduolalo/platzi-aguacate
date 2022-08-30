import React from 'react'
import {useRouter} from 'next/router';
const ProductItem = () => {

    const {
        query: {
            productID
        }
    }= useRouter();

    return <div>Esta es la página del producto {productID}</div>
}

export default ProductItem;