import React, {Component} from "react";
import ErrorIndicator from '../error-indicator';

class ErrorBoundary extends Component{

  constructor(){
    super();
    this.state = {
      hasError: false
    };
  };

  componentDidCatch(){
    this.setState({
      hasError: true
    });
  };


  render(){
    const {hasError} = this.state
    const content = !hasError ? this.props.children : <ErrorIndicator />
    return content
  };
};

export default ErrorBoundary;