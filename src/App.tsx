import React, { useState } from 'react';
import Board from './components/Board';

const App = () => {
  const [key, setKey] = useState(0);

  const handleReset = () => {
    setKey(key + 1);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between bg-gray-200 py-2 px-4">
        <h1 className="text-2xl font-bold">Campo Minado</h1>
        <button
          className="p-2 bg-blue-500 text-white rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Board bombPercentage={10} key={key} />
      </div>
      <div className="flex items-center justify-center bg-gray-200 py-2">
        <span className="text-gray-600">Desenvolvido por Matheus Felipe Vieira Santiago</span>
      </div>
    </div>
  );
};

export default App;
