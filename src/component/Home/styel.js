import  styled  from 'styled-components';

    export const Homesec =styled. div `
    text-align: center;
     background:url('../../images/home-bg.jpg');
    height: 500px;
   background-position: center;
   position: relative;
   background-size: cover;
   `

  export const Information = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
`

export const Title = styled.h2  `

    color:  #5e5e5e;  
    font-weight: bold;
    font-size: 50px;
    `

export const Description = styled.h4 `

    font-size: 30px;
    color: #eb5424;
    margin-bottom: 20px;
    `

  export const Info = styled.p `

    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px; 
    `

export const Span =styled.span`

    color: #000;
`

export const Btn =styled.button`

    cursor: pointer;
   border: 0;
    width: 150px;
    padding: 15px;
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
         
    
`

/*.home-btn:hover
{
    background: #fff;
    color: #eb5424;
}*/