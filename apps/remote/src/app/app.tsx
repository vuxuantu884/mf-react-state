import { DataContext } from '@mf-react-state/shared/data-context';
import React, { useContext } from 'react';
import { DataProvider } from '@mf-react-state/shared/data-context';
import { Link, Routes, Route } from 'react-router-dom';

export function App() {
  const { counter, setCounter } = useContext(DataContext);
  return (
    <>
      Remote test{' '}
      <button onClick={() => setCounter(counter - 1)}>counter {counter}</button>{' '}
    </>
  );
}

export default App;
