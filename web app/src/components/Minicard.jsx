import React from 'react'
import styled from 'styled-components'
import Search from "../images/icons8-search.svg"

const Container = styled.div`
        width: 150px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 2px -2px 10px -4px rgba(0,0,0,0.42);
`
const Icon = styled.img`
        width: 40px;
`

const Text = styled.p`
    margin-top: 10px;
    text-align: center;
`



const Minicard = () => {
  return (
    <Container>
    <Icon src={Search}/>
    <Text>Lorem ipsum dolor sit amet consectetur</Text>
    </Container>
  )
}

export default Minicard