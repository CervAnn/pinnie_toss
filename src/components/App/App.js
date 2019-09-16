import React, { Component } from 'react'
import Header from '../Header/Header'
// import {staticData} from '../../data/data.js'
import Container from '../Container/Container'
import './App.css'

export default class App extends Component {
  componentDidMount() {
    // let NCAA = staticData.teams.filter(team => team.idLeague === "4479" && team.strDivision === "FBS") 
    // let NFL = staticData.teams.filter(team => team.idLeague === "4391" && team.strLeague === "NFL")

    fetch("https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=American_Football&c=USA")
    .then(response => response.json())
    .then(data => console.log(data.teams.filter(team => team.idLeague === "4479" && team.strDivision === "FBS")))
  }
  
  render() {
    return (
      <section className="App">
        <Header />
        <Container />
      </section>
    )
  }
}

