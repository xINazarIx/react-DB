import React from "react";
import { SwapiServiceConsumer } from "../components/swapi-service-context";

const withSwService = (View) => {
  return (props) => { 
    return (
      <SwapiServiceConsumer>
        {
          (swapiService) => {
            return (
              <View {...props} swapiService={swapiService}/>
            )
          }
        }
      </SwapiServiceConsumer>
    )
  }
}

export {withSwService};