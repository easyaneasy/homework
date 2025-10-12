import React from 'react'
import ListContainer from './PropsList/ListContainer'
import Container from './GuessRandomNumber/Container'

export default function Main() {
  return (
    <div>
      <p>Main</p>
      <ListContainer></ListContainer>      
      <br /><hr /><br />
      <Container></Container>
    </div>
  )
}
