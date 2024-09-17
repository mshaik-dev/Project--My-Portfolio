import React from "react";

const Banner = () => {
  return (
    <>
      <section className="banner" >
        <div className="banner-content">
          <h1 className="banner-title_name">Hi, I'm Yaseen</h1>
          <p
            className="description"
          >
            I'm a full-stack developer with a fresher using React and NodeJs
            Reach out if You would like to learn more{" "}
          </p>
          <a href="mailto:ysn6040@gmail.com" className="banner-btn"> Contact me</a>
        </div>
        <img className="profile" src="./assets/hero/profile1.png"></img>
      </section>
    </>
  );
};

export default Banner;
