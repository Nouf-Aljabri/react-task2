import React from "react";
import styles from "./Style";
export default function Footer(){
    const {lightorange}= styles();
        return(
  <footer id="footer">

    <div className={`container-fluid" ${lightorange}`}>
    <div className="copyright p-4">
      © Copyright <strong><span>Ninestars</span></strong>. All Rights Reserved
    </div>

  </div>
</footer>

    )
}