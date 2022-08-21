import React from "react";

const withRenderFunc = (View, renderFunc) => {
  return (props) => {
    return (
      <View renderFunc={renderFunc} {...props}/>
    )
  }
}

export {withRenderFunc};