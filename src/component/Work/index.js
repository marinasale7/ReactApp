import React,{Component} from 'react';

import  {Worksection ,WorkTitle,Workpart,Icon,PartTitle,Line,PartDesc,Span} from './style.js'
 import axios from 'axios'

 class Work  extends Component {
     state = {  
         works : []
      }
      componentDidMount(){
          axios.get("js/data.json").then(res =>{this.setState({works:res.data.works})})
      }
     render() { 
    
          const {works}=this.state
          const workslist = works.map ( (worksitem) => {
              return(
                <Workpart first={worksitem.id} key={worksitem.id}>
                <Icon  className={worksitem.icon_name}></Icon>
                <PartTitle >{worksitem.title}</PartTitle>
                <Line />
                <PartDesc >
                {worksitem.body}
                </PartDesc>
            </Workpart>
              )
          })
           

         return ( 
            <Worksection>
            <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
             {workslist}            
                
            </div>
            </Worksection>
          );
     }
 }
  
 export default Work;

