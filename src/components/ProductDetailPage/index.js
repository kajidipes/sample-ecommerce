import React, {useState} from 'react'
import {ProductDetailWrapper} from './style'

function ProductDetailPage() {
    const [count, setCount] = useState(1)

    // const handleClick= ()=> {
    //     return (count > 1) ? setCount(count-1) : null
    // }

    return (
        <ProductDetailWrapper>
            <h2>Product Detail</h2>

            <div className= "relative">
                <img src= "../../../image/laptop.jpg"/> 
                <h4>Laptops, Highly durable</h4>

                <p> Quantity 
                     
                    <button onClick={()=> (count > 1) ? setCount(count-1) : count}> - </button>
                    {count}
                    <button onClick={()=> setCount(count+1)}> + </button>
                </p>
            </div>
        </ProductDetailWrapper>
    )
}

export default ProductDetailPage
