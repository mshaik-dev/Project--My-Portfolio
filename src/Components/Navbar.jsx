// import React from 'react'
// import {Link}   from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <div className='Navbar'>
//        <nav className='portfolio'>
//         <Link to ="/"> mylinke</Link>
//        </nav>
//        <ul>
//         <li>
//             <Link to ="/about">about</Link>
//         </li>
//         <li>
//             <Link  to ="/experience">Experience</Link>
//         </li>
//         <li>
//             <Link to ="/projects">Project</Link>
//         </li>
//         <li>
//             <Link to ="/contact">Contact</Link>
//         </li>
//        </ul>
//       <h1>This is navbar</h1>
//     </div>
//   )
// }

// export default Navbar
import React, { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  const Imglink = "./assets/nav/menuIcon.png";
  const ImgLink1 = "./assets/nav/closeIcon.png";

  return (
    <>
      <div className="appContainer">
        <nav className="navbar">
          <a className="titleName">Portfolio</a>
          <div className="menu-bar">
            <img
              src={menuOpen ? Imglink : ImgLink1}
              alt="menuicon"
              className="menuBtn_1"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
          <ul className={`menuItems ${menuOpen ? "menuItems1" : ""}`} 
            onClick={() => setMenuOpen(false)}>
            <li>
              <a href ="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href ="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
