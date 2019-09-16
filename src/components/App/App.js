import React, { Component } from 'react'
import Header from '../Header/Header'
import Container from '../Container/Container'
import './App.css'

export default class App extends Component {  
  render() {
    return (
      <section className="App">
        <Header />
        <Container />
      </section>
    )
  }
}

