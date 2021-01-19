import React from 'react';
import {Homesec,Information,Title,Description,Info,Span,Btn} from'./styel.js'

const Home = ()=>
{
    return(
         <Homesec>
             <div className="container">
             <Information>
                 <Title> Home Title</Title>
                 <Description>Creative Director</Description>
                 <Info>
                 Iam a professional <Span>UX Designer</Span> and Front-End Developer
                  creating modern and resposive designs to Web and Mobile.
                   Let us work together. Thank you. 
                 </Info>
                 <Btn>Let's Begin</Btn>
                </Information>
             </div>
             
         </Homesec>
    )
}
export default Home;