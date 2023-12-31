import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Building beautiful and functional web applications</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li> */}
            
          </ul>
        </article>
        {/*mobile dev */}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/> 
             <p> Building beautiful and functional web applications</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li> */}
            
          </ul>
        </article>
        {/*end of web dev */}
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/> 
             <p> Building beautiful and functional web applications</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/> 
             <p>Lorem ipsum dolor sit amet consectetur  elit.</p>
            </li>
             */}
          </ul>
        </article>
        {/*end of Devops */}
      </div>
    </section>
  )
}

export default Services