import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Home from './home/Home'
import About from './about/About'
import Nhapkho from './utils/nhapkho/Nhapkho'
import PhieuNhapKho from './utils/nhapkho/PhieuNhapKho';
import '../style/style.scss'

const App = () => (
<Router>
	<div className="wrapper">
		<Header />
		<Sidebar />
		<div className="content-wrapper">
			<Route exact path="/" component={Home}/>
			<Route path="/about" component={About}/>
			<Route exact path="/GoodsReceipt/Index" component={Nhapkho}/>	
			<Route path="/GoodsReceipt/Record/:recordId" component={PhieuNhapKho} />     	
		</div>
	</div>
</Router>
)

export default App
