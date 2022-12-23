import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderdetails'>
        <main>
            <h1>Order Details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"hajh 12-b dsdd"}
                </p>
            </div>
            <div>
                <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Deepak"}
                </p>
                <p>
                    <b>phone</b>
                    {77878787}
                </p>
            </div>
            <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"23-2-2323"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"23-2-2323"}
                </p>
            </div>
            <div>
                <h1>Payment</h1>
                <p>
                    <b>Payment Mehod</b>
                    {"COD"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    {"fdsfsdsdfsf"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"23-2-2323"}
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    Rs{7878}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    Rs{78}
                </p>
                <p>
                    <b>Tax</b>
                    Rs{78}
                </p>
                <p>
                    <b>Total Amount</b>
                    Rs{7878+78+78}
                </p>
                
            </div>
            <article>
                <h1>Ordered Items</h1>
                <div>
                    <h4>
                        Pasta</h4>
                        <div>
                            <span>{12}</span> x <span>{232}</span>
                        </div>
                    
                </div>
                <div>
                    <h4>
                        Pizza</h4>
                        <div>
                            <span>{10}</span> x <span>{300}</span>
                        </div>
                    
                </div>
                <div>
                    <h4>
                        Dhosa</h4>
                        <div>
                            <span>{8}</span> x <span>{252}</span>
                        </div>
                    
                </div>
                <div>
                    <h4 style={{fontWeight:800,}}>Sub Total</h4>
                    <div
                    style={{fontWeight:800,}}>Rs{2132}</div>
                </div>
            </article>
            
        </main>
    </section>
  )
}

export default OrderDetails