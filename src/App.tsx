import React from 'react'
import GameBoard from './components/GameBoard'
import { useMinefield } from './hooks/useMineField'
import './index.css'

function App() {
	const { generate } = useMinefield()

	const handleReset = () => {
		generate(10, 10, 20) // exemplo com rows = 10, cols = 10 e minePercent = 20
	}

	return (
		<div className="flex flex-col h-screen bg-gray-100">
			<nav className="flex justify-between items-center bg-gray-300 p-4">
				<h1 className="font-bold text-xl">Campo Minado</h1>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset}>NOVO JOGO</button>
			</nav>
			<div className="flex justify-center items-center flex-grow">
				<div className="bg-gray-500 rounded-md p-4">
					<GameBoard />
				</div>
			</div>
		</div>
	)
}

export default App
