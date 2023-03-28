import React from 'react'
import styled from 'styled-components'
import Pricecard from './Pricecard'

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`


const Price = () => {
  return (
        <Container>
            <Pricecard price={20} type={"Basic Plan"}/>
            <Pricecard price={40} type={"Premium Plan"}/>
            <Pricecard price={60} type={"Advanced Plan"}/>
        </Container>
  )
}

export default Price