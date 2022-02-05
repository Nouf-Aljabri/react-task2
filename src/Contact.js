import React from "react";
import styles from "./Style";

export default function Contact() {
  const {formBox , btn} = styles();
    return(

<div className="container">
  <div className="row justify-content-center">
  <div className="col-lg-7 mt-lg-0 d-flex align-items-stretch  " >
  <form action="#" method="post" role="form" className={formBox}>
    <div className="form-row ">
      <div className="form-group col-md-6">
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
        <div className="validate" />
      </div>
      <div className="form-group col-md-6">
        <label htmlFor="name">Your Email</label>
        <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
        <div className="validate" />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="name">Subject</label>
      <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
      <div className="validate" />
    </div>
    <div className="form-group">
      <label htmlFor="name">Message</label>
      <textarea className="form-control" name="message" rows={10} data-rule="required" data-msg="Please write something for us" defaultValue={""} />
      <div className="validate" />
    </div>
    
    <div className="text-center"><button className={` m-5 ${btn}`} type="submit">Send Message</button></div>
  </form>
</div>
  </div>

</div>

    )
}