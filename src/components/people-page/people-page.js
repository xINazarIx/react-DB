import React, { Component } from 'react';
import {PersonDetails} from '../sw-components/items-details';
import { PeopleListWithData } from '../sw-components/items-lists';
import Row from '../row-block';

import './people-page.css';


export default class PeoplePage extends Component {

  constructor(){
    super();
    this.state = {
      selectedItem: null
    }
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem});
  };

  render() {
    const {selectedItem} = this.state;

    return (
      <Row left={<PeopleListWithData selectedItem={this.onItemSelected}/>} right={<PersonDetails itemId={selectedItem}/>}/>
    );
  }
}

