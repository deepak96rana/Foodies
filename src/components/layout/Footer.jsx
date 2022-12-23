import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>Foodies</h2>
            <p>We are trying to give you the best food..</p>
            <br />
            <em>We give attention to genuine feedback.</em>
            <strong>All right received @foodies </strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://google.com">
                <AiFillYoutube/>
            </a>
            <a href="https://google.com">
                <AiFillInstagram/>
            </a>
            <a href="https://google.com">
                <AiFillGithub/>
            </a>
        </aside>
    </footer>
  )
}

export default Footer