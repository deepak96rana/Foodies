import React from 'react'
import { Link } from 'react-router-dom'

const PaymentSucess = () => {
  return (
   <section className='paymentsucess'>
    <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Sucessfully,You can check order  status below</p>
         
         <Link to="/myorders">Check status</Link>

    </main>
   </section>
  )
}

export default PaymentSucess