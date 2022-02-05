import React from "react";
import styles from "./Style";
export default function ServiceCard(props){
    const {icon , cardStyle} = styles(); 
    return(
     
      <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
        <div className={`icon-box px-4 pt-2 ${cardStyle}`}>
          <div className={icon}><i className={props.icon} /></div>
          <h5 >{props.title}</h5>
          <p> {props.desc}</p>
        </div>
      </div>
    
    )
    }