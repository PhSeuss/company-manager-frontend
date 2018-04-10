import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import App from './components/App'
import createStore from './store/configureStore'


const store = createStore();


ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('root')
)
