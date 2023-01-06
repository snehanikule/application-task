import React,{useState} from 'react'
import './Cart.css';
import Items from './Items';
import {Product} from './Product';
const Cart = () => {
    const [data, setData] =useState(Product);
    return (
        <div>
            <header>
                <div className='cart-items'>
                    <div className='main-cart-section'>
                        <h1>Your Cart</h1>
                        <p className='total-items'>Clear this Cart<br />
                        </p><span className='device-item'>Devices</span>
                        <p className='price-item'>Price</p>
                        <div>
                            <h1>Repair Device<span className='total-items-count'>(3 Devices)</span></h1>
                        </div>
                    </div>
                    
                </div>
                {/* {data.map((user)=>{
                       return (
                           <Items/>
                    );})} */}

                <Items/>
        
           <div className='card-total'>
               <h3>Total Amount :</h3><span className='rs'>₹ 399</span>
            </div>
            <button>Checkout Services</button>
        </header >
    </div >
  )
}

export default Cart