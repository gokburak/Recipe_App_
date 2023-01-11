import styled from "styled-components";


export const MainContainer = styled.div`
display: flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
 `

export const Card = styled.div`
flex-direction:column;
height:20rem;
width:20rem;
background-color:aqua;
border-radius:5px;
 box-shadow:3px 3px 10px 1px rgba(0,0,0,0.3);
`
export const  Header = styled.h1`
font-size:1.5rem;
text-align:center;
` 
export const Image = styled.img`
height:10rem;
border-radius:10px;
display: flex;
margin:1rem auto;

`
export const Button = styled.button`
background-color:white;
display: flex;
margin:auto;
outline: none;
border:none;
border-radius:5px; 
cursor: pointer;
padding:1rem;
&:hover {
    opacity:.6;
}
`









