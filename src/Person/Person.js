import React from 'react'
import styled from 'styled-components'


const StylesDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

@media (min-width:500px){
    width:'450px';
}

`;

 



//import './Person.css'

const person = (props) =>{

    const style ={
        '@media (min-width:500px)':{
            width:'450px'
        }
    }

    return(
        <StylesDiv className="Person" style={style}>             
        <p onClick={props.click}>Je suis {props.name} et j'ai {props.age} ans !</p>
         <p>{props.children}</p>
         <input type="text" onChange={props.changed} value={props.name}/>
        </StylesDiv>
    )
};

export default person;