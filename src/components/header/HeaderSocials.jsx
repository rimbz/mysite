import React from 'react'
/*https://react-icons.github.io/react-icons*/
import{BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a rel="noreferrer" href="https://www.linkedin.com/in/rim-bziouich-616596201/" target="_blank"><BsLinkedin/></a>
        <a rel="noreferrer" href="https://github.com/RimaBzch" target="_blank"><FaGithub/></a>
        <a rel="noreferrer" href="https://dribbble.com/" target="_blank"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials