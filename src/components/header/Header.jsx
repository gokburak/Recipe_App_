import React from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './HeaderStyles'

const Header = ({ setQuery, setMeal, mealType,getData }) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    getData()
  }
  return (
    <HeaderContainer>
      <MainHeader>RECIPE APP</MainHeader>
      <FormContainer  onSubmit={handleSubmit} >
        <FoodInput type="text" placeholder="search" onChange={(e) => setQuery(e.target.value)} />
        <Button type="submit">SEARCH</Button>
        <Select name="mealType" id="mealType" onChange={(e) => setMeal(e.target.value)}>{mealType.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>{item}</option>
        )
        )}</Select>
      </FormContainer>
    </HeaderContainer>
  )
}

export default Header
