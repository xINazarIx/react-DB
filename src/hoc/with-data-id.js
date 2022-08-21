import React, {Component, Fragment} from "react";
import DetailsSceleton from "../components/details-sceleton/details-sceleton";
import Spinner from "../components/spinner/spinner";

const withDataId = (View) => {
  return class extends Component{

    state = {
      item: null,
      loading: false
    };
  
    componentDidMount() {
      this.updateItem();
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
        this.setState({
          loading: true
        });
      };
    };
  
    updateItem() {
      const { itemId, getData, getImage } = this.props;

      if(itemId === null){
        return;
      }

      getData(itemId).then((item) => {
        this.setState({
          item: {
            ...item,
            image: getImage(item)
          }, 
          loading: false
        })
      });
    }
  

    render(){
      const {children} = this.props;
      const {item, loading} = this.state;

      const content = !loading && item ? <View item={item} children={children}/>: null;
      const spinner = loading ? <Spinner /> : null;
      const sceleton = !loading && !item ? <DetailsSceleton/> : null;

      return (
        <Fragment>
          {content}
          {spinner}
          {sceleton}
        </Fragment>
      )
    }
  }
}

export {withDataId};