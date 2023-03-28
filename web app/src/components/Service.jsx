import React, { useState } from 'react'
import styled from 'styled-components'
import How from "../images/how.png"
import Minicard from "./Minicard"
import Start from "../images/play.png"
const Container = styled.div`
        display: flex;
`
const Left = styled.div`
    width: 50%;
    position: relative;
`

const Image = styled.img`
    display: ${(props)=> props.open && "none"};
    width: 95%;
    margin-left: 100px;
`

const Right = styled.div`
    width: 50%;
`
const Wrapper = styled.div`
        padding: 50px;
        display: flex;
        flex-direction: column;
`
const Title = styled.h1``
const Desc = styled.p`
    font-size: 20px;
    color: gray;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-around;
`
const Button = styled.button`
        width: 180;
        border-radius: 10px;
        background-color: darkblue;
        color: white;
        font-weight: bold;
        border: none;
        padding: 15px 25px;
        margin: 30px 0px 0px 30px;
        font-size: 20px;
        text-align:center;
        display: flex;
        align-items: center;
        cursor: pointer;
`
const Play = styled.img`
    width: 20px;
    margin-right: 10px;
`
const Video = styled.iframe`
     display: ${(props)=> !props.open && "none"};
     width: 600px;
     height: 340px;
     position: absolute;
     top:0;
     bottom: 0;
     margin: auto;
     margin-top: 200px;
     margin-left: 100px;

`

const Service = () => {
    const [open,setOpen] = useState(false);
  return (
        <Container>
            <Left>
                <Image open={open} src={How} />
                <Video open={open}  src="https://player.vimeo.com/video/761577999?rel=0;&autoplay=1?"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture; " allowfullscreen></Video>
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Aut delectus, ratione voluptas possimus error minima voluptatibus exercitationem tempore at in,
                     repudiandae doloribus deleniti explicabo sit, amet voluptatem optio quis molestiae.
                    </Desc>
                </Wrapper>
                <CardContainer>
                    <Minicard />
                    <Minicard />
                    <Minicard />
                </CardContainer>
                <Button onClick={()=> setOpen(true)} ><Play src={Start} /> How it works</Button>
            </Right>
        </Container>
  )
}

export default Service