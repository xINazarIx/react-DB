import React from 'react';

import './item-list.css';


const ItemList = ({items, renderFunc, selectedItem}) => {

  const renderElements = () => {
    return items.map(({id, ...item}) => {
      return (
        <li className="list-group-item" key={id} onClick={() => selectedItem(id)}>
          {renderFunc(item)}
        </li>
      );
    });
  };

  return (
    <ul className="item-list list-group">
      {renderElements()}
    </ul>
  )
}

export default ItemList;
