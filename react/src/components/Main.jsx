import React from 'react'
import ListContainer from './PropsList/ListContainer'
import Container from './GuessRandomNumber/Container'
import Carts from './DummyJSON/Carts'
import Posts from './DummyJSON/Posts'
import Products from './DummyJSON/Products'
import Quotes from './DummyJSON/Quotes'


export default function Main() {
  return (
    <div>
      <p>Main</p>
      <ListContainer></ListContainer>      
      <br /><hr /><br />
      <Container></Container>
      <br /><hr /><br />
      {/* DummyJSON */}
      {/* <Carts></Carts> */}
      {/* <Posts></Posts> */}
      {/* <Products></Products> */}
      <Quotes></Quotes>
    </div>
  )
}
