import React from 'react';
import Board from './components/Board';

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Board bombPercentage={10} />
    </div>
  );
};

export default App;
