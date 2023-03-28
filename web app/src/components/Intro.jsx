import React from 'react'
import styled from 'styled-components'
import Woman from "../images/woman.png" 
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
    height: calc(100vh - 50px);
    padding: 20px;
    display: flex;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const Right = styled.div`
        width: 40%;
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
        font-size: 60px;
        width: 60%;
        margin-top: 0px;
        margin-bottom: 0px;
`
const Desc = styled.p`
        width: 60%;
        font-size: 20px;
        margin-top: 0px;
        margin-bottom: 0px;
`
const Info = styled.div`
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;
`
const Button = styled.button`
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
`

const Contact = styled.div`
            display: flex;
            flex-direction: column;

`
const Phone = styled.span`
    font-weight: bold;
    color: #f0667d;
`
const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
    `
const Image = styled.img`
       width: 100%;
`

const Intro = () => {
  return (  
    <Container>
        <Left>
            <Title>
                Adventure in creative age
            </Title>
            <Desc>
                We belive that designing products and services in close partnership with 
                our clients is the only way to have real impact in their business
            </Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call us (+251) 0953099662</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right>
            <Image src = {Woman} />
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Intro