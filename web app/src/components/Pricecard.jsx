import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: -2px 2px 10px -4px rgba(0,0,0,0.42);
    background-color: white;
    border-radius: 10px;

`
const PriceContainer = styled.span``

const Price = styled.span`
        font-weight: 600;
        font-size: 40px;
`
const Type = styled.button`
        color: crimson;
        width: 120px;
        padding: 15px 10px;
        background-color: white;
        border: 2px solid crimson;
        font-weight: bold;
        border-radius: 20px;
        margin-top: 20px;

`
const List = styled.ul`
        list-style: none;
`
const ListItem = styled.li`
        font-style:bold;
        margin-top: 20px;
`
const Button = styled.button`
        border: none;
        background-color: darkblue;
        color: white;
        font-size: 16px;
        font-weight: bold;
        padding: 15px;
        border-radius: 10px;
        cursor: pointer;
        margin-bottom: 20px;
`

const Pricecard = ({price,type}) => {
  return (
    <Container>
        <PriceContainer>
            $ <Price>{price}</Price>/month
        </PriceContainer>
        <Type>{type}</Type>
        <List>
            <ListItem>200 Hand-Crafted Templates</ListItem>
            <ListItem>Exclusive support</ListItem>
            <ListItem>50+ pre-built websites.</ListItem>
            <ListItem>Premium plugins</ListItem>
        </List>
        <Button>Join Now</Button>
    </Container>
  
  )
}

export default Pricecard