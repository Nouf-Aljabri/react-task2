import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "./Style";


export default function Services(){
    const {lightorange, brown , lightBrown} = styles();
    const cards = [{icon:"bx bxl-dribbble", title:"Lorem Ipsum",desc:"Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"},
    {icon:"bx bx-file", title:"Sed ut perspiciatis",desc:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"},
    {icon:"bx bx-tachometer", title:"Magni Dolores", desc:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim"},
    {icon:"bx bx-world" , title:"Nemo Enim" , desc:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum"}]
return(
<section id="services" className={` text-center p-5 ${lightorange}`}>
  <div className="container">
    <div className="mt-2">
      <h2 className={lightBrown}>Services</h2>
      <h3 className={brown}>Check out the great services we offer</h3>
    </div>
    <div className="row p-5">
        {cards.map((card, index)=>{
            return <ServiceCard icon={card.icon} title={card.title} desc={card.desc} key={index}/>
        })}
    </div>
  </div>
</section>

);
}