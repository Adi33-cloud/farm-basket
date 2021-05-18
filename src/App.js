import React, { useState } from 'react';
import Header from "./Header";
import Entry from "./Entry";
import InputArea from "./InputArea";

function App() {

  const [entryArray, setEntryArray] = useState([]);

  function addEntry(newEntry) {
    setEntryArray(prevEntryArray => {
      return [...prevEntryArray, newEntry];
    });
  }

  function deleteEntry(id) {
    setEntryArray(prevEntryArray => {
      return prevEntryArray.filter((entryItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <InputArea onAdd={addEntry} />

      {entryArray.map((entryItem, index) => {
        return (
          <Entry
            key={index}
            id={index}
            name={entryItem.basket}
            price={entryItem.price}
            onDelete={deleteEntry}
          />
        );
      })}

    </div>
  );
}

export default App;
