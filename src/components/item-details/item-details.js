import React, { Children, cloneElement } from 'react';
import ErrorButton from '../error-button/error-button';
import './item-details.css';

const Record = ({ field, label, item }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {Record};


const ItemDetails = ({item, children, item: {name, image}}) => {
  return (
    <div className="person-details card">
        <img className="person-image" src={image} alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              Children.map(children, (child, i) => {
                return cloneElement(child, {item})
              })
            }
          </ul>
          <ErrorButton />
        </div>
      </div>
  )
};

export default ItemDetails;
