import React from 'react'

const About = () => {
  return (
    <section className='about' id ="about">
        <h2 className='about-title_name'>ABOUT</h2>
        <div className='about-content'>
            <img src="./assets/hero/side1.png" alt="frontend" className='about-image' width="100px"/>
            <ul className='about-items'>
                <li className='about-item'>
                    <img src="./assets/about/cursorIcon.png" alt="cursor" />
                    <div className='about-itemText'>
                        <h3>Frontend Developer</h3>
                        <p>I'm a frontend developer with experience in building responsive and optimized</p>
                    </div>
                </li>
                <li className='about-item'>
                    <img src="./assets/about/serverIcon.png" alt="spl-cursor" />
                    <div className='about-itemText'>
                        <h3>Backend Developer</h3>
                        <p>I'm a backend developer with experience in building scalable and efficient</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
