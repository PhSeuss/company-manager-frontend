import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/Header'
import Home from './home/Home'
import About from './about/About'
import Utils from './utils/Utils'
import Nhapkho from './utils/nhapkho/Nhapkho'
import PhieuNhapKho from './utils/nhapkho/PhieuNhapKho';
import '../style/style.scss'

const App = () => (
<Router>
	<div>
		<Header />
		<div>
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route exact path="/utils/" component={Utils}/>
			<Route exact path="/utils/nhapkho" component={Nhapkho}/>	
			<Route path={`/utils/nhapkho/:recordId`} component={PhieuNhapKho} />     	
		</div>
	</div>
</Router>
)

export default App
