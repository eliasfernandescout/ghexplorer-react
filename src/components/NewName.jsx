import { useState } from "react";

export function NewName() {
  let [name, setName] = useState('initialState');

  function newName() {
    setName('Ragnar')
  }


  return (
    <div>
      <h2>{name}</h2>
      <button onClick={newName}>Mudar nome</button>
    </div>
  )
}