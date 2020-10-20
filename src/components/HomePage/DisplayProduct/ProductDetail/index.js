import React, {useState} from 'react'
import { ProductDetailWrapper } from './style'

function ProductDetail() {
    const [count, setCount] = useState(1)
    return (
        <ProductDetailWrapper>
            <h2>Product Detail</h2>

            <div className= "relative">
                <img src= "../../../image/laptop.jpg"/> 
                <h4>Laptops, Highly durable</h4>

                <p> Quantity 
                     
                    <button disabled= {count<=1} onClick={()=> (count > 1) ? setCount(count-1) : count}> - </button>
                    {count}
                    <button onClick={()=> setCount(count+1)}> + </button>
                </p>
            </div>
        </ProductDetailWrapper>
    )
}

export default ProductDetail
