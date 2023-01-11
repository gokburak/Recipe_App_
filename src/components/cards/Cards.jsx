import React from 'react'
import {Button, Card, Header, Image, MainContainer} from "./CardsStyles"
import defaultImage from "../../assets/default-image.jpg"
import {useNavigate} from "react-router-dom"

const Cards = ({recipes}) => {
  const navigate = useNavigate()
  return (
    <MainContainer >
      {recipes.map(({recipe},index)=>(
      <Card key={index}>
        <Header>{recipe.label}</Header>
        <Image src={recipe.image || defaultImage}/>
        <Button onClick={()=>navigate("details",{state:recipe})}>View More</Button>
      </Card>))}
    </MainContainer>
  )
}

export default Cards