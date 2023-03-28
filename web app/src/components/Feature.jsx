import React from 'react'
import styled from 'styled-components'
import Phone from "../images/smartphone.png"
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
        display: flex;
`
const Left = styled.div`
    width: 50%;
    padding-top: 50px;
    
`
const Right = styled.div`
    width : 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

`
const Image  = styled.img`
        width:80%;
`
const Title = styled.span`
    font-size: 70px;
`
const SubTitle = styled.span`
    font-size: 24px;
    color: gray;


`
const Desc = styled.p`
        color: darkgray;
        font-size: 20px;
        margin-top:30px;
`

const Button = styled.button`
        width: 150px;
        padding: 15px 10px;
        border-radius: 20px;
        background-color: darkblue;
        border: none;
        font-weight: bold;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin-top: 20px;
`

const Feature = () => {
  return (
    <Container>
        <Left>
            <Image src={Phone} />
        </Left>
        <Right>
            <Title><b>Good</b> design <br/>
                   <b>Good</b> business
            </Title>
            <SubTitle>
                we know that good design means good business.
            </SubTitle>
            <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Aut delectus, ratione voluptas possimus error minima voluptatibus exercitationem tempore at in,
              repudiandae doloribus deleniti explicabo sit, amet voluptatem optio quis molestiae.
            </Desc>
            <Button>Learn More</Button>
        </Right>
        <AnimatedShapes />
    </Container>
  )
}

export default Feature