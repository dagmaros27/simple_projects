import React from "react";
import styled, { css } from "styled-components"
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Feature from "./components/Feature";
import Service from "./components/Service";
import Price from "./components/Price";
import Conatct from "./components/Conatct";
import Footer from "./components/Footer";

const Container = styled.div`
    height:100vh;
    overflow:hidden;
    position: relative;
`
const shape = css`
      width:100%;
      height:100%;
      position:absolute;
      top:0;
      left:0;
      z-index: -1;
`
const IntroShape = styled.div`
      ${shape}
      clip-path: polygon(100% 0%, 65% 0%, 50% 100%, 100% 100%);
      background-color: crimson; 
`
const FeatureShape = styled.div`
      ${shape}
clip-path: polygon(0% 0%, 50% 0%, 35% 100%, 0% 100%);
background-color: pink; 
`
const ServiceShape = styled.div`
      ${shape}
clip-path: polygon(0% 0%, 35% 0%, 35% 100%, 0% 100%);
background-color: #f88497; 
`
const PriceShape = styled.div`
      ${shape}
clip-path: polygon(35% 0%, 100% 0%, 100% 100%, 75% 100%);
background-color: crimson; 
`

const App = () => {
  return (
    <>
    <Container>
        <Navbar />
        <Intro />
        <IntroShape />
    </Container>
    <Container>
      <Feature />
      <FeatureShape />
    </Container>
    <Container>
      <Service />
      <ServiceShape />
    </Container>
    <Container>
      <Price />
      <PriceShape />
    </Container>
    <Container>
      <Conatct />
      <Footer />
    </Container>
    </>
  )
}

export default App