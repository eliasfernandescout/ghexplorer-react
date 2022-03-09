import { useState } from 'react';
import './App.scss';
import { Counter } from './components/Counter';
import { NewName } from './components/NewName';
import { RepositoryList } from './components/RepositoryList';

function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
      <NewName />
    </>


  )
}

export default App;
