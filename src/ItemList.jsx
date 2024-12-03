import React from 'react';

function ItemList(props) {
  return (
    <div>
      {props.list && props.list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default ItemList;
