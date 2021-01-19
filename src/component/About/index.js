import React from 'react';
import {Aboutsec,About_info,Info_title,Span,Info_dir,Info_desc,Info_link} from'./style.js'

const About = ()=>
{
    return(
        <Aboutsec>
        <div className="container">
        <About_info>
        <Info_title><Span>This is</Span> Me</Info_title>
        <Info_dir>Creative Director</Info_dir>
        <Info_desc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Info_link href="#">explicabo</Info_link> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
        </Info_desc>
        <Info_desc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
        </Info_desc>
        </About_info>
        </div>
        </Aboutsec>
    )
}
export default About;