import React ,{Component} from 'react';
import {Social_media,Socialsec,Icon,Des, Span,Spaninfo2} from'./style.js';
import axios from 'axios';

class Social extends Component {
    state = { 
        data : []
     }
    componentDidMount(){
        axios.get("js/data.json").then(res =>{this.setState({data:res.data.social})})
    }
    render() { 
        const {data}= this.state;
        const media = data.map( (item) =>{
           return(
            <Socialsec item={item.id} key={item.id} >
            <Icon className={item.icon}></Icon>
            <Des>
           <Span>{item.title}</Span>
           <Spaninfo2>{item.body}</Spaninfo2>
            </Des>
        </Socialsec> 
           )
        })
        return ( 
            <Social_media>    
              {media}
    </Social_media>
         );
    }
}
 
export default Social;
 