import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 10%;
    background: #111;
    color: lightgray;
`
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
  
`
const List = styled.ul`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
`
const ListItem = styled.li`
      margin-right: 20px;
    
`
const Copyright = styled.span`
    
`
const Footer = () => {
  return (
    <Container>
        <Wrapper>
          <List>
            <ListItem> Guide </ListItem>
            <ListItem> Support </ListItem>
            <ListItem> API </ListItem>
            <ListItem> Community </ListItem>
          </List>
          <Copyright> © Dagmaros27</Copyright>
        </Wrapper>
    </Container>
  )
}

export default Footer;