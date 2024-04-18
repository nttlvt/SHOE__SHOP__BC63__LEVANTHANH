import React, { useState } from 'react'
import shoeList from './data.json'
import { ProductShoe } from './ProductShoe'
import { Cart } from './Cart'

export const ShoeShop = () => {
    // console.log('shoeList', shoeList)
    const [product, setProduct] = useState([])
    console.log('product', product)
    const handleCarts = (item) => {
        //copy lại state carts hiện tại
        //spread operator
        const data = [...product]

        console.log('data product', data)
        const newProduct = {
            ...item,
            cartQuantity:1// thuộc tính số lượng sản phẩm
        }
        data.push(newProduct)
           //set lại state product
        setProduct(data)

     
    }

    return (
        <div className='container'>
            <h2>ShoeShop</h2>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
                Giỏ hàng
            </button>

            <ProductShoe data={shoeList} handleCarts={handleCarts} />
            <Cart product={product}/>



        </div>
    )
}
