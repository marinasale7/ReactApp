import  styled  from 'styled-components';

export const Profile_skills = styled.div ` 
    padding: 50px 0;
    overflow: hidden;
    `

export const Profilesec =styled.div `
    width: 50%;
    float: left;
    ` 

export const Profile_list =styled.ul` 
    list-style: none
`

export const Profile_item = styled.li` 
    margin-bottom: 8px
    `

export const Span =styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const Web = styled.span` 
    font-weight: normal;
    color: #eb5424
    `
 
export const Skills =styled.div` 
    width: 50%;
    float: left;
    `

export const Skills_desc =styled.p`  
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
    `

export const Bar=styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px;
     
    `

export const Title= styled.span` 
    float: left;
    `

    export const Perc = styled.span`
    float: right;
    margin-right: 100px;
    
`

export const Parent=styled.div` 
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

 export const Parent_span=styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props =>props.items===1 ?"100%" : ''};
    width: ${props =>props.items===2 ?"90%" : ''};
    width: ${props =>props.items===3?"80%" : ''};

 `  

 /*export const Sp1 =styled.span` 
    width: 100%;
 `

 export const Sp2 =styled.span`
    width: 90%;
 `

 export const Sp3 =styled.span`  
    width: 80%;
 `*/

 export const Profile_title =styled.h2`

    font-size: 40px; 
    margin-bottom: 20px
`

export const Title_span = styled.span`

    font-weight: normal;
 `
 // Profile_title =.skills-title