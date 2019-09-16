import React from 'react';
import ReactDOM from 'react-dom';
import {staticData} from '../../data/data'
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {

  })

  it('should assign NFL and NCAA to an array of objects', () => {
    let NCAA = staticData.teams.filter(team => team.idLeague === "4479" && team.strDivision === "FBS") 
    let NFL = staticData.teams.filter(team => team.idLeague === "4391" && team.strLeague === "NFL")
     expect(NCAA.length).toEqual(129)
     expect(NFL.length).toEqual(32)
  })

  
}) 
