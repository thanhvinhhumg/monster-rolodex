import React, {Component} from 'react';
import {CardList} from './component/card-list/card-list.component';

import logo from './logo.svg';
import './App.css';
import { SearchBox } from './component/search-box/search-box.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        monster: [],
        searchField: ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(responsive => responsive.json())
    .then(users => this.setState({monster: users}))
  }
  render(){
    const{monster , searchField} = this.state;
    const searchMonster = monster.filter(el => el.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
    <div className="App">
      <h1>Mosters Rolodex</h1>
      <SearchBox placeholder="Search monster" handleChange={e=>{this.setState({searchField: e.target.value})}}/>
      <CardList monster={searchMonster}/>
    </div>
    ) 
  }
}
export default App;
