import React from "react";
import aboutImg from "./about-img.svg";
import styles from "./Style";

export default function About(){
  const {brown, lightBrown} = styles();
    return (
<section id="about" className="m-5">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
        <img src={aboutImg} className="img-fluid aos-init aos-animate" alt data-aos="zoom-in" />
      </div>
      <div className="col-lg-6 pt-5 pt-lg-0">
        <h1 className={brown}>Voluptatem dignissimos provident quasi</h1>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
        </p>
        <div className="row my-5">
          <div className="col-md-6 aos-init" >
            
            <h4  className={lightBrown}>Corporis voluptates sit</h4>
            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
          </div>
          <div className="col-md-6 aos-init" >
            
            <h4  className={lightBrown}>Ullamco laboris nisi</h4>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}