import React from 'react';

function ItemDelete({ index, deleteItem }) {
  return (
    <div>
      <button onClick={() => deleteItem(index)}>Delete</button>
    </div>
  );
}

export default ItemDelete;
