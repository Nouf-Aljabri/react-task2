import React from "react";
import styles from "./Style";

export default function Team(){
    const {lightBrown , brown , lightorange} = styles();
    return(
        <section className={` text-center p-5 ${lightorange}`}>
        <div className="container">
          <div className="mt-2">
          <h2 className={lightBrown}>Team</h2>
      <h3 className={brown}>Our team is always here to help</h3>
          </div>
          <div className="row p-5">
            
          </div>
        </div>
      </section>   
    )

}