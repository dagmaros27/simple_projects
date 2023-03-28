import React from 'react'
import styled from 'styled-components';
import Phone from "../images/phone.png"
import Map from "../images/map.png"
import Email from "../images/email.png"

const Container = styled.div`
    height: 90%;
    background-color: rgba(250,230,230,0.4);
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    paddding: 20px;
    align-items: center;
    justify-content: center;
`
const FormWrapper = styled.div`
    width: 50%
`

const AddressWrapper = styled.div`
    width:50%;
    display: flex;
    flex-direction: column;
    
` 
const Form = styled.form`
    height: 250px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;    
`
const Left = styled.div`
      height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
const Right = styled.div`
      height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`
const Input = styled.input`
    width: 200px;
    padding: 20px;
`
const Textarea = styled.textarea`
    width: 200px;
    height: 60%;
    padding: 20px;
`
const Button = styled.button`
        padding: 15px 10px;
        border-radius: 10px;
        background-color: darkblue;
        border: none;
        font-weight: bold;
        color: white;
        font-size: 20px;
        cursor: pointer;
        margin-top:20px;
`

const Title = styled.h1`
        margin: 0px 0px 30px 100px;
`
const AddressContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    margin-bottom: 30px;
    
`
const Image = styled.img`
    width: 30px;
    margin-right:10px;
`

const Text = styled.span``


export const Conatct = () => {
  return (
    <Container>
        <Wrapper>
            <FormWrapper>
                <Title>Questions? <br /> Let's get in touch</Title>
                    <Form>
                        <Left>
                            <Input placeholder='Your name' />
                            <Input placeholder='Your email' />
                            <Input placeholder='Subject' />
                        </Left>
                        <Right>
                            <Textarea placeholder='Your message' />
                            <Button>Send</Button>
                        </Right>
                    </Form>
            </FormWrapper>
            <AddressWrapper>
                <AddressContainer>
                    <Image src={Map} />
                    <Text>4 kilo, Arada, Addis Ababa, ETH</Text>
                </AddressContainer>
                <AddressContainer>
                    <Image src={Phone} />
                    <Text>+251953099662/+251977563352 </Text>
                </AddressContainer>
                <AddressContainer>
                    <Image src={Email} />
                    <Text>dagmawimisker1@gmail.com</Text>
                </AddressContainer>
            </AddressWrapper>
        </Wrapper>
    </Container>
  )
}

export default Conatct;