import React from 'react'
import pasta from "../../assets/pasta.png"
import pizza from "../../assets/pizza.png"
import dhosa from "../../assets/dhosa.png"
import { Link } from 'react-router-dom'

const CardItem=({value,title,img,increment,decrement})=>(
    <div className='cartItem'>
        <div>
            <h4>{title}</h4>
            <img src={img} alt="item" />
        </div>
        <div>
            <button onClick={decrement}>-</button>
            <input type="number" name="" id=""  readOnly value={value}/>
    
            <button onClick={increment}>+</button>
        </div>

    </div>
)



const Cart = () => {

 const increment =(item) =>{};

 const decrement = (item)=>{};



  return (
    <section className='cart'>
        <main>
            <CardItem title={"pasta"} img={pasta} value={0}
            increment={()=>increment(1)}
            decrement={()=> decrement(1)}
            />
             <CardItem title={"pizza"} img={pizza} value={0}
            increment={()=>increment(2)}
            decrement={()=> decrement(2)}
            />
             <CardItem title={"dhosa"} img={dhosa} value={0}
            increment={()=>increment(3)}
            decrement={()=> decrement(3)}
            />
            <article>
                <div>
                    <h4>Sub Total</h4>
                    <p>Rs{2000}</p>

                </div>
                <div>
                    <h4>Tax</h4>
                    <p>Rs{2000*0.18}</p>
                    
                </div>
                <div>
                    <h4>Shipping charges</h4>
                    <p>Rs{200}</p>
                    
                </div>
                <div>
                    <h4>Total</h4>
                    <p>Rs{2000+2000*0.1+200}</p>
                    
                </div>
              <Link to="/shipping">Checkout</Link>
            </article>
        </main>
    </section>
  )
}

export default Cart