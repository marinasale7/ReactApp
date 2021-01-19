 import React, { Component } from 'react';
 import {Route,BrowserRouter} from 'react-router-dom'
import Navbar from './component/Navbar/index';
import Contact from './component/Contact/index';
import Index from './component/Index';

 class App extends Component {
   state = {  }
   render() { 
     return ( 
       <BrowserRouter>
               <Navbar/>
             <Route exact path="/" component={Index}/>
             <Route path="/Contact" component={Contact}/>
         
         

       </BrowserRouter>
      );
   }
 }
  
 export default App;