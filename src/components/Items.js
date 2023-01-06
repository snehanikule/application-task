import React, { useState } from 'react'

const Items = () => {
   var showDate=new Date();
   const displayDay=showDate.getDate();
   const displayTime =showDate.getHours()
   const [cutdata, setCutdata] =useState();

  return (
    <div>
        <div className='cart-items-container'>
                        <div  className='items-maininfo'>
                        <div className='items-info'>
                            <div className='product-img'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajUAR38LyTMKIYTclsHj7LfEmUPuKa1N6cA&usqp=CAU' alt='no image' />
                            </div>
                            <div className='title'>
                                <h2>Whirlpool  Conditioner</h2>
                                <p>| split AC</p><p>| 2.0 Ton</p>
                            </div>
                        </div>
                        <div className='price'> <h3>₹ 399</h3></div>
                        <div className='remove-item' >Delete</div>
                        <div className='item-services'>
                        <div>
                       <h1>Select Date of service</h1>
                    <h2>{displayDay} {displayDay+1} {displayDay+2} {displayDay+3} {displayDay+4}</h2>
                       </div>
                        <div >
                           <h2> Available Slots</h2>
                          <h1>{displayTime}-{displayTime+1} {displayTime+1}-{displayTime+2} {displayTime+2}-{displayTime+3} {displayTime+3}-{displayTime+4}</h1>
                        </div>
                        </div>
                        </div>
                        <hr/>
                 </div>
    </div>
  )
}

export default Items