


import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemAdd from './ItemAdd';
import ItemDelete from './ItemDelete';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Item List</h1>
      <ItemAdd addItem={addItem} />
      <ItemList list={items} />
      {items.map((item, index) => (
        <ItemDelete key={index} index={index} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default App;

