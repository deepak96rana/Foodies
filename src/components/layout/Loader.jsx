import { motion } from 'framer-motion'
import React from 'react'
import {IoFastFoodOutline} from "react-icons/io5"

const Loader = () => {
    const options={
        initial :{
            opacity:0,
        },
        animate:{
            opacity:1,
        },
        transition:{
            ease:"linear",
            repeat:"Infinity",
            repeatType:"reverse",


        },

    }
  return (
    <div className='loader'>
        <IoFastFoodOutline/>
        <div>

       <motion.p {...options}>Loading...</motion.p>
        </div>
    </div>
  )
}

export default Loader