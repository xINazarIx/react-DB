import React from "react";
import ItemDetails, {Record} from '../item-details/item-details';
import {withDataId} from '../../hoc/with-data-id';
import { withSwService } from "../../hoc/with-sw-service";


const PerosonDetailsComponent = ({itemId, swapiService: {getPerson, getPersonImage}}) => {
  return (
    <PersonWithData itemId={itemId} getData={getPerson} getImage={getPersonImage}>
      <Record field="gender" label="Gender"/>
      <Record field="birthYear" label="Birth-Year"/>
      <Record field="eyeColor" label="Eye-Color"/>
    </PersonWithData>
  );
};

const PlanetDetailsComponent = ({itemId, swapiService: {getPlanet, getPlanetImage}}) => {
  return (
    <PlanetWithData itemId={itemId} getData={getPlanet} getImage={getPlanetImage}>
      <Record field="diameter" label="Diameter"/>
      <Record field="rotationPeriod" label="Rotation-Period"/>
      <Record field="population" label="Population"/>
    </PlanetWithData>
  )
}

const StarshipDetailsComponent = ({itemId, swapiService: {getStarship, getStarshipImage}}) => {
  return (
    <StarshipWithData itemId={itemId} getData={getStarship} getImage={getStarshipImage}>
      <Record field="model" label="Model"/>
      <Record field="manufacturer" label="Manufacturer"/>
      <Record field="costInCredits" label="Cost"/>
    </StarshipWithData>
  )
}

const PersonDetails = withSwService(PerosonDetailsComponent);
const PersonWithData = withDataId(ItemDetails);

const PlanetDetails = withSwService(PlanetDetailsComponent);
const PlanetWithData = withDataId(ItemDetails);

const StarshipDetails = withSwService(StarshipDetailsComponent);
const StarshipWithData = withDataId(ItemDetails);

export {PersonDetails, PlanetDetails, StarshipDetails};