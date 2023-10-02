import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {/* <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Html</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
            {/* <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
               <h4>JavaScript</h4>
               <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>Bootstarp</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>React </h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>Angular</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/*end of frontend*/}
      
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Spring Boot</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Node Js</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Django</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article> */}
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>C/C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article> */}
          </div>
        </div>

      
      {/*=====================================================================
      <div className="experience__devops">
          <h3>Devops</h3>
          <div className="experience__content">
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
                 h4>Spring Boot</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
             <div>
                 <h4>Laravel</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>C/C++</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            
            </article>
          </div>
       </div>
      {/*=========== ====================================================================*/}
      </div>
    </section> 
  )
}

export default Experience