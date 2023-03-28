import React from 'react'
import styled from 'styled-components'

const Square  = styled.div`
        width: 60px;
        height: 60px;
        background-color: #4e6bff;
        opacity: 0.7;
        position: absolute;
        top: -60px;
        left: 60px;
        z-index: -1;
        animation: square 25s linear alternate infinite;

        @keyframes square {
            to{
                transform: translate(100vw, 100vh);
            }
        }
`
const Circle  = styled.div`
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background-color: #ff97af;
        opacity: 0.4;
        position: absolute;
        top: 200px;
        left: -100px;
        z-index: -1;
        animation: square 25s linear alternate infinite;

        @keyframes square {
            to{
                transform: translate(100vw, -100vh);
            }
        }
`
const Rect  = styled.div`
        width: 70px;
        height: 120px;
        background-color: #669966;
        opacity: 0.5;
        position: absolute;
        top: 400px;
        left: -100px;
        z-index: -1;
        animation: square 30s linear alternate infinite;

        @keyframes square {
            to{
                transform: translate(100vw, -50vh);
            }
        }
`

const AnimatedShapes = () => {
  return (
    <>
        <Square />
        <Circle />
        <Rect />
    </>
  )
}

export default AnimatedShapes