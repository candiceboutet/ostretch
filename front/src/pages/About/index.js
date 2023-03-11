import React from 'react';
import './styles.scss';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import fred from '../../assets/img/fred.JPG';
import candice from '../../assets/img/candice.jpeg'
import marie from '../../assets/img/marie.JPG'
import ludo from '../../assets/img/ludo.jpg'

const About = () => {
  return (
    <div className='about'>
        <h2>L'équipe O'Stretch</h2>
            <div className='about-container'>
                <div className='about-card'>
                    <img className='about-photo' src={marie}></img>
                    <div>
                        <p className='about-name'>Marie Geneste</p>
                        <p>Product Owner et Développeuse Backend</p>
                        <div className='about-icons'><FaLinkedin /> <FaGithub /></div>
                    </div>
                </div>
                <div className='about-card'>
                    <img className='about-photo' src={fred}></img>
                    <div>
                        <p className='about-name'>Fred Meziere</p>
                        <p>Git Master et Développeur Backend</p>
                        <div className='about-icons'><FaLinkedin /> <FaGithub /></div>
                    </div>
                </div>
                <div className='about-card'>
                    <img className='about-photo' src={candice}></img>
                    <div>
                        <p className='about-name'>Candice Boutet</p>
                        <p>Scrum Master et Développeuse Frontend</p>
                        <div className='about-icons'><FaLinkedin /> <FaGithub /></div>
                    </div>
                </div>
                <div className='about-card'>
                    <img></img>
                    <div>
                        <p className='about-name'>Andy Vasseur</p>
                        <p>Référent technique et Développeur Frontend</p>
                        <div className='about-icons'><FaLinkedin /> <FaGithub /></div>
                    </div>
                </div>
                <div className='about-card'>
                    <img className='about-photo' src={ludo}></img>
                    <div>
                        <p className='about-name'>Ludovic Torval</p>
                        <p>Lead Dev et Développeur Frontend</p>
                        <div className='about-icons'><FaLinkedin /> <FaGithub /></div>
                    </div>
                </div>

    </div>
    </div>
  );
}

export default About;
