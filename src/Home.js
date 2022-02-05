import React from "react";
import styles from "./Style";
import hero from "./hero.png";

export default function Home(){
    const {lightorange,btn, brown, lightBrown} = styles();
 
    return (

 <div className={`container-fluid mt-2 p-5 ${lightorange}`}>
            <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <h1 className={brown} >Bettter digital experience with Ninestars</h1>
              <h2 className={lightBrown} >We are team of talanted designers making websites with Bootstrap</h2>
              <button className={`btn-get-started scrollto px-4 py-2 m-5 ${btn}`}>Get Started</button>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={hero} className="img-fluid " alt="" />
            </div>
          </div>
        </div>
      </section>
 </div>
      
    );
}