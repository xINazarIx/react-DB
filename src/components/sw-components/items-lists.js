import React, {Fragment} from "react";
import ItemList from "../item-list/item-list";
import { withData } from "../../hoc/with-data";
import SwapiService from "../../services/swapi-service";
import { withRenderFunc } from "../../hoc/with-render-func";

const renderPeople = ({ name, gender, eyeColor }) => {
  return (
    <Fragment>
      <span>{name}</span>
      <span>Gender: {gender}</span>
    </Fragment>
  );
};

const renderPlanets = ({ name, diameter }) => {
  return (
    <Fragment>
      <span>{name}</span>
      <span>Diameter: {diameter}</span>
    </Fragment>
  );
};

const renderStarships = ({ name, costInCredits }) => {
  return (
    <Fragment>
      <span>{name}</span>
      <span>Cost: {costInCredits}</span>
    </Fragment>
  );
};

const swapiService = new SwapiService();
const {
  getAllPeople,
  getAllPlanets, 
  getAllStarships
} = swapiService;


const PeopleListWithData = withData(withRenderFunc(ItemList, renderPeople), getAllPeople);
const PlanetsListWithData = withData(withRenderFunc(ItemList, renderPlanets), getAllPlanets);
const StarshipsListWithData = withData(withRenderFunc(ItemList, renderStarships), getAllStarships);


export {
  PeopleListWithData,
  PlanetsListWithData,
  StarshipsListWithData
};

