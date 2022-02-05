import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Team from "./Team";
import Footer from "./Footer";
import Contact from "./Contact";


function App() {
  return (
   <div>
      <Nav />
     
     <Routes>
       <Route exact path="/" element= {<Home />}> </Route>
       <Route  path="/About" element= {<About />}> </Route>
       <Route  path="/Services" element= {<Services />}> </Route>
       <Route path="/Team" element={<Team />}></Route>
       <Route path="/Contact" element={<Contact />}></Route>
    
     </Routes>
   <Footer />


   </div>

  );
}

export default App;
