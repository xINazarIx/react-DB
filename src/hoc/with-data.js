import React, { Component, Fragment } from "react";
import Spinner from "../components/spinner";

const withData = (View, getData) => {
  
  return class extends Component{
    constructor(){
      super();
      this.state = {
        items: null,
        loading: true
      };
    };

    componentDidMount(){
      this.updateItems();
    };

    updateItems =() => {
      getData().then(this.itemsLoaded);
    };

    itemsLoaded = (items) => {
      this.setState({
        items, loading: false
      })
    }

    render(){

      const {items, loading} = this.state;
      const loader = loading ? <Spinner /> : null;
      const content = !loading ? <View items={items} {...this.props}/> : null;
      


      return (
        <Fragment>
          {loader}
          {content}
        </Fragment>
      )
    };
  };
};

export {withData};