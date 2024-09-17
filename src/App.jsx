import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
// function Home() {
//   return (
//     <>
//       <h1>Home</h1>
//       <p>Welcome to home page</p>
//     </>
//   );
// }
// function About() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>this is about</p>
//     </>
//   );
// }

// function Experience() {
//   return (
//     <>
//       <h1>Experience</h1>
//       <p>This is experience</p>
//     </>
//   );
// }

// function Contact() {
//   return (
//     <>
//       <h1>Contact</h1>
//       <p>This is contact</p>
//     </>
//   );
// }

function App() {
  return (
    <div className="myapp">
      <Navbar />
      <Banner />
      <About />
      <Experience/>
      <Project />
      <Contact/>
    </div>
  );
}

// style using js objects

export default App;
