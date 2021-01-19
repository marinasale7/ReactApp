import React, { Component } from 'react';
import Home from './../Home/index';
import About from './../About/index';
import Work from './../Work/index';
import Footer from './../Footer/index';
import Portfolio from './../Portfolio/index';
import Profile from './../Profile/index';
import Social from './../Social/index';


 class Index extends Component {
   state = {  }
   render() { 
     return ( 
       <div>
       
         
         <Home/>
         <Work/>
         <Portfolio/>
         <Profile/>
         <About/>
         <Social/>
         <Footer/>
         
         
        
         


       </div>
      );
   }
 }
  
 export default Index;