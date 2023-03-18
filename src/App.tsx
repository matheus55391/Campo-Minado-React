import React from 'react'
import GameBoard from './components/GameBoard'
import './index.css'

function App() {
	return (
		<div className="flex flex-col h-screen items-center justify-center bg-gray-900">
			<div className="bg-gray-800 rounded-md p-4">
				<GameBoard />
			</div>
		</div>
	)
}

export default App
