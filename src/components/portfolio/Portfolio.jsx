import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/ecomm.png'
import IMG2 from '../../assets/signup.png'
import IMG3 from '../../assets/gottx.png'
import IMG4 from '../../assets/ifix.png'
import IMG5 from '../../assets/f1.png'
import IMG6 from '../../assets/v01.png'
import IMG7 from '../../assets/tic.png'
import IMG8 from '../../assets/g.png'
import IMG9 from '../../assets/v01.png'

const data = [
  {
    id:1,
    image:IMG1,
    title:'ECommerce Web Application (Mern Stack)',
    github:"https://github.com/RimaBzch/",
    demo:"https://www.youtube.com/watch?v=9kZhMsg8ZoM&t=1s"
  },
  {
    id:2,
    image:IMG2,
    title:'Meal Delivery App (Spring Boot,Angular, MongoDb)',
    github:"https://github.com/RimaBzch/",
    demo:"https://www.youtube.com/watch?v=c963H-JElSM&t=16s"
  },
  {
    id:3,
    image:IMG3,
    title:'Gottex Frontend WebSite (React Js Typescript)',
    github:"https://github.com/RimaBzch/",
    demo:"https://youtu.be/UsAIu-QYpjE"
  },
  {
    id:4,
    image:IMG4,
    title:'IFixYourTech WebSite (React Js Typescript) ',
    github:"https://github.com/RimaBzch/",
    demo:"https://www.youtube.com/watch?v=fZYDBxBj-W4"
  },
  {
    id:5,
    image:IMG5,
    title:' Crud Application ( Symfony )',
    github:"https://github.com/RimaBzch/",
    demo:"https://www.youtube.com/watch?v=B8VuRhEhi2Q"
  },
  {
    id:6,
    image:IMG6,
    title:'Company Responsive WebSite (Html, Css)',
    github:"https://github.com/RimaBzch/",
    demo:"https://www.youtube.com/watch?v=lZJXH20iUxE&t=1s"
  },
  {
    id:7,
    image:IMG7,
    title:'TicTacToe(Spring Boot)',
    github:"https://github.com/RimaBzch/TicTacToeGame",
    demo:"https://www.youtube.com/shorts/EvA4FNSA5UY"
  },
  {
    id:8,
    image:IMG8,
    title:'Students Mangement Application',
    github:"https://github.com/RimaBzch/",
    demo:"https://www.youtube.com/watch?v=-bdF2mMKdnk"
  },
  {
    id:9,
    image:IMG9,
    title:'Company Responsive WebSite (Html, Css)',
    github:"https://github.com/RimaBzch/",
    demo:"https://www.youtube.com/watch?v=lZJXH20iUxE&t=1s"
  }

]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
              </div>
            </article>
          )
         })
       }
        
      </div>
    </section>
  )
}

export default Portfolio