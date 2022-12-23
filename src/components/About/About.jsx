import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from "react-icons/ri";
import me from "../../assets/founder.jpg";

const About = () => {
  return (
   <section className='about'>
    <main>
        <h1>About Us</h1>
        <article>
            <h4>Foodies Grab Your Best Food.</h4>
            <p>We are Foodies. The place for most tasty food on the earth..</p>
            <p>Explore the various type of food .click below to see the menu</p>
            <Link to="/"><RiFindReplaceLine/></Link>
        </article>
        <div>
            <h2>Founder</h2>
            <article>
                <div>
                    <img src={me} alt="founder" />
                    <h3>Deepak kumar Rana</h3>
                </div>
                <p>I am Deepak Kumar Rana , the founder of foodies.Affiliated to Good taste...</p>
            </article>
        </div>
    </main>
   </section>
  )
}

export default About