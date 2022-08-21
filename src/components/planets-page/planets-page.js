import React, { Component } from 'react';
import { PlanetsListWithData } from '../sw-components/items-lists';
import { PlanetDetails } from '../sw-components/items-details';
import Row from '../row-block';


export default class PlanetsPage extends Component {

  constructor(){
    super();
    this.state ={
      selectedItem: null
    };
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const {selectedItem} = this.state;

    return (
      <Row left={<PlanetsListWithData selectedItem={this.onItemSelected}/>} right={<PlanetDetails itemId={selectedItem}/>}/>
    );
  }
}
