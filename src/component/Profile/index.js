import React,{Component} from 'react';
import {Profile_skills,Profilesec,Profile_list,Profile_item,Span,Web,Skills
    ,Skills_desc,Bar,Title,Perc,Parent,Parent_span 
    ,Profile_title,Title_span} from './style.js'
import axios from 'axios'


class Profile extends Component {
    state = { 
        skills : []
     }

     componentDidMount(){
         axios.get("js/data.json").then( res => {this.setState({skills:res.data.profile})})
     }
    render() { 

         const {skills} =this.state
         const data = skills.map( (item) => {
             return(
                <Bar key={item.id}>
                < Title>{item.title}</Title>
                < Perc>{item.perc}</Perc>
                <Parent>
                <Parent_span items={item.id}></Parent_span>
                </Parent> 
            </Bar>
             )

         })

      
        return (  
            <Profile_skills>
            <div className="container">
                <Profilesec>
                    <Profile_title><Title_span>My </Title_span>Profile</Profile_title>
                    <Profile_list>
                        <Profile_item>
                            <Span>Name</Span>
                            Marina Aziz
                        </Profile_item>
                        <Profile_item>
                            <Span>Birthday</Span>
                            1/1/1111
                        </Profile_item>
                        <Profile_item>
                            <Span>Address</Span>
                            Ain shams
                        </Profile_item>
                        <Profile_item>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </Profile_item>
                        <Profile_item>
                            <Span>Email</Span>
                            noga@noga.com
                        </Profile_item>
                        <Profile_item>
                            <Span>Website</Span>
                            <Web>www.google.com</Web>
                        </Profile_item>
                    </Profile_list>
                    </Profilesec>
                    <Skills>
                    < Profile_title>Some <Title_span>skills</Title_span></Profile_title>
                    <Skills_desc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </Skills_desc>

                    {data}
                    
                </Skills>       
         </div>
         
                </Profile_skills>
        );
    }

}
export default Profile;


/*  <div className="bar">
                        <span className="title">Bootstrap</span>
                        <span className="perc">100%</span>
                        <div className="parent">
                            <span className="sp1"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">CSS3</span>
                        <span className="perc">90%</span>
                        <div className="parent">
                            <span className="sp2"></span>
                        </div>
                    </div>
                    
                    <div className="bar">
                        <span className="title">Photoshop</span>
                        <span className="perc">80%</span>
                        <div className="parent">
                            <span className="sp3"></span>
                        </div>
                    </div>  */