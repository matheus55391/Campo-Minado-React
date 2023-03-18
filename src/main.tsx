import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { MinefieldProvider } from './contexts/MinefieldContext'

ReactDOM.render(
	<React.StrictMode>
		<MinefieldProvider>
			<App />	
		</MinefieldProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
