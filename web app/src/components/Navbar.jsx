import React from 'react'
import styled from 'styled-components'


const  Container = styled.div`
    height:50px;
`
const Wrapper = styled.div`
    margin:0;
    padding:0px 20px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    height:100%;
`
const Left = styled.div`
    width:60%;
    display: flex;
    justify-content:space-between;
    align-items:center;
   
`
const Logo = styled.h1`
        margin-top: 0px;
    margin-bottom: 0px;
    text-decoration: underline crimson;
`
const Menu = styled.ul`
    display:flex;
    list-style: none

`
const MenuItem = styled.li`
    margin-left: 30px;
    font-weight: bold;
`
const Register = styled.button`
        height: 30px;
        padding: 0px 10px;
        background-color: crimson;
        border: 2px solid white;
        color:white;
        font-weight: bold;
        cursor: pointer;
`

const Navbar = () => {
  return (
   <Container>
        <Wrapper>
            <Left>
                <Logo>Agency</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Service</MenuItem>
                    <MenuItem>Pricing</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            </Left>
            <Register>Join Now</Register>
        </Wrapper>
   </Container>
  )
}

export default Navbar