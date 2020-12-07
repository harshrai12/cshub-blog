import React from 'react'
import "../styles/team.scss"
import abhisar from "../images/WhatsApp Image 2020-06-27 at 10.48.43 PM.jpeg"
import adi from "../images/adii.jpeg"
import harsh from "../images/DSC_0477-01-01-01.jpeg"
import mudit from "../images/mudit.jpeg"
import linkedin from "../images/linkedin (1).png"
import twotter from "../images/twitter.png"
import github from "../images/github.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../util/font-awesome';





function teammember() {
  return (
   <div className="container1">
   <div className="header">
       <h1>Our Team</h1>
   </div>
   <div className="sub-container">
   <div class="teams">
       <img src={abhisar} alt=""/>
       <div className="name">Abhisar Pandey</div>
       <div className="desig">Founder</div>
       <div className="about">Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Earum labore quam reprehenderit
           vitae aliquam dicta! </div>

       <div className="social-links">
           <a href="#"> <img src={linkedin} alt="" className="icon" /></a>
           <a href="#"> <img src={twotter} alt="" className="icon"/></a>
           <a href="#"> <img src={github} alt="" className="icon"/></a>
          
       </div>
   </div>
   </div>
   <div className="sub-container">
       <div class="teams">
           <img src={adi} alt=""/>
           <div className="name">Aditya</div>
           <div className="desig">Developer</div>
           <div className="about">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Earum labore quam reprehenderit
               vitae aliquam dicta! </div>

           <div className="social-links">
               <a href="#"> <img src={linkedin} alt="" className="icon" /></a>
               <a href="#"> <img src={twotter} alt="" className="icon"/></a>
               <a href="#"> <img src={github} alt="" className="icon"/></a>
              
           </div>
       </div>

       <div class="teams">
           <img src={harsh} alt=""/>
           <div className="name">Harsh Rai</div>
           <div className="desig">Web dev</div>
         <div className="about">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Earum labore quam reprehenderit
               vitae aliquam dicta! </div>

               <div className="social-links">
               <a href="#"> <img src={linkedin} alt="" className="icon" /></a>
               <a href="#"> <img src={twotter} alt="" className="icon"/></a>
               <a href="#"> <img src={github} alt="" className="icon"/></a>
              
           </div>
       </div>

       <div className="teams">
           <img src={mudit} alt=""/>
           <div className="name">Mudit</div>
           <div className="desig">Manager</div>
           <div className="about">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Earum labore quam reprehenderit
               vitae aliquam dicta! </div>

               <div className="social-links">
               <a href="#"> <img src={linkedin} alt="" className="icon" /></a>
               <a href="#"> <img src={twotter} alt="" className="icon"/></a>
               <a href="#"> <img src={github} alt="" className="icon"/></a>
              
           </div>
       </div>
   </div>
   <div className="sub-container">
       <div class="teams">
           <img src={abhisar} alt=""/>
           <div className="name">Arth</div>
           <div className="desig">Developer</div>
           <div className="about">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Earum labore quam reprehenderit
               vitae aliquam dicta! </div>

           <div className="social-links">
               <a href="#"> <img src={linkedin} alt="" className="icon" /></a>
               <a href="#"> <img src={twotter} alt="" className="icon"/></a>
               <a href="#"> <img src={github} alt="" className="icon"/></a>
              
           </div>
       </div>

       <div class="teams">
           <img src={abhisar} alt=""/>
           <div className="name">Devasnh</div>
           <div className="desig">Designer</div>
         <div className="about">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Earum labore quam reprehenderit
               vitae aliquam dicta! </div>

               <div className="social-links">
               <a href="#"> <img src={linkedin} alt="" className="icon" /></a>
               <a href="#"> <img src={twotter} alt="" className="icon"/></a>
               <a href="#"> <img src={github} alt="" className="icon"/></a>
              
           </div>
       </div>

       <div className="teams">
           <img src={abhisar} alt=""/>
           <div className="name">Amritya</div>
           <div className="desig">Manager</div>
           <div className="about">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Earum labore quam reprehenderit
               vitae aliquam dicta! </div>

               <div className="social-links">
               <a href="#"> <img src={linkedin} alt="" className="icon" /></a>
               <a href="#"> <img src={twotter} alt="" className="icon"/></a>
               <a href="#"> <img src={github} alt="" className="icon"/></a>
              
           </div>
       </div>
   </div>

</div>
  )
}

export default teammember

