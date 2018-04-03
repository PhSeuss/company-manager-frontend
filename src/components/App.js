import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/Header'
import Home from './home/Home'
import About from './about/About'
import Utils from './utils/Utils'
import Nhapkho from './utils/nhapkho/Nhapkho'
import '../style/style.scss'

const App = () => (
<Router>
	<div>
		<Header />
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route exact path="/utils/" component={Utils}/>
			<Route path="/utils/nhapkho" component={Nhapkho}/>	     	
		</div>
	</div>
</Router>
)

export default App
