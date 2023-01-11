import React, { useEffect, useState } from 'react'
import HomeStyles, { HomeImg, ImgDiv } from './HomeStyles'
import axios from 'axios'
import Header from '../../components/header/Header'
import Cards from '../../components/cards/Cards'
import homeSvg from "../../assets/home.svg"

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"]

  const [query, setQuery] = useState("egg")
  const [meal, setMeal] = useState(mealType[0])
  const [recipes, setRecipes] = useState("")
  const app_id =  process.env.REACT_APP_app_id;
  const Api_Key = process.env.REACT_APP_Api_Key;
  const url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${Api_Key}&mealTypes=${meal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    }
    else {
      alert("Please enter your meal ")
    }

  }
  console.log(recipes);
  return (
    <div>
      <Header setMeal={setMeal} setQuery={setQuery} mealType={mealType} getData={getData} />

      {!recipes && (
        <ImgDiv>
        <HomeImg src={homeSvg} />
        </ImgDiv>
      ) }
     
      {recipes?.length > 0 && <Cards recipes={recipes}/>}
      
    </div>
  )
}

export default Home
