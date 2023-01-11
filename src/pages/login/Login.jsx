import React from 'react'
import { FormContainer, Header, LoginContainer, StyledButton, StyledForm, StyledImg, StyledInput } from './LoginStyles'
import meal from "../../assets/meal.svg"
const Login = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={meal}/>
    <Header>
      {"<CW/>"}RECIPE
    </Header>
    <StyledForm>
    <StyledInput type="text" placeholder="username" required />
    <StyledInput type="password" placeholder="password" required />
    <StyledButton type="submit">
Login
    </StyledButton>
    </StyledForm>
      </FormContainer>
    </LoginContainer>
  )
}

export default Login