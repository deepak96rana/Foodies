import React from 'react'
import MenuCard from './MenuCard'
import pasta from "../../assets/pasta.png"
import pizza from "../../assets/pizza.png"
import dhosa from "../../assets/dhosa.png"

const Menu = () => {

    const addtocart =(itemNum)=>{};
  return (
   <section id="menu">
    <h1>MENU</h1>
    <div>
        <MenuCard 
        itemNum={1}
         burgerSrc={pasta}
          price={80} 
          title="Pasta"
          delay={0.1}
          handler={addtocart}/>
          
          <MenuCard 
        itemNum={2}
         burgerSrc={pizza}
          price={200} 
          title="Pizza"
          delay={0.5}
          handler={addtocart}/>
           
          <MenuCard 
        itemNum={3}
         burgerSrc={dhosa}
          price={120} 
          title="Dhosa"
          delay={0.8}
          handler={addtocart}/>
    </div>

   </section>
  )
}

export default Menu