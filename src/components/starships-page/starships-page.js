import React, { Component} from 'react';
import {StarshipDetails} from '../sw-components/items-details';
import { StarshipsListWithData } from '../sw-components/items-lists';
import Row from '../row-block';


export default class StarshipPage extends Component {

  constructor(){
    super();
    this.state = {
      selectedItem: null
    }
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const {selectedItem} = this.state;

    return (
      <Row left={<StarshipsListWithData selectedItem={this.onItemSelected}/>} right={<StarshipDetails itemId={selectedItem}/>}/>
    );
  }
}

