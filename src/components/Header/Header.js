import React from 'react'
import '../Header/Header.css'

const Header = () => {
  return (
      <header className="App-header">
        <h1 id="header-title">Pinnie Toss</h1>
        <img id="football-jersey" src={require("../../images/football-jersey.svg")} alt="" />
      </header>
  )
}

export default Header;


