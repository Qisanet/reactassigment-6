import React, { useState } from 'react';

function ItemAdd({ addItem }) {
  const [listItem, setListItem] = useState("");

  const listHandler = (event) => {
    setListItem(event.target.value);
  };

  const submitHandler = () => {
    if (listItem) {
      addItem(listItem);
      setListItem(""); // Clear the input after submitting
    }
  };

  return (
    <div>
      <input
        type="text"
        value={listItem}
        onChange={listHandler}
        placeholder="Add an item"
      />
      <button onClick={submitHandler}>Add Item</button>
    </div>
  );
}

export default ItemAdd;
