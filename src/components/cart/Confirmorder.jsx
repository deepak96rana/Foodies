import React from 'react'

const Confirmorder = () => {
  return (
    <section className='comfirmorder'>

        <main>
            <h1>Confirm Order</h1>

            <form>
                <div>
                    <label >cash On delivery</label>
                    <input type="radio" name="payment" id="" />
                </div>
                <div>
                    <label >Online</label>
                    <input type="radio" name="payment" id="" />
                </div>
                <button type='submit'>Place Order</button>
            </form>
        </main>

    </section>
  )
}

export default Confirmorder