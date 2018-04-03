import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const Home = () => (
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
	<LinkContainer to="/">
	<a className="navbar-brand">Home </a>
	</LinkContainer>
	<ul className="navbar-nav">
		{ /* Link */ }
		<li className="nav-item">
			<LinkContainer to="/about">
				<a className="nav-link">About </a>
			</LinkContainer>
		</li>
		{/* Dropdown */}
		<li className="nav-item dropdown">
			<LinkContainer to="/utils">
				<a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
					Utilities
				</a>
			</LinkContainer>
			<div className="dropdown-menu">
				<LinkContainer to="/utils/nhapkho">
					<a className="dropdown-item">Nhap kho</a>
				</LinkContainer>
				<LinkContainer to="/utils/xuatkho">
					<a className="dropdown-item">Xuat kho</a>
				</LinkContainer>
				<LinkContainer to="/utils/taichinh">
					<a className="dropdown-item">Tai chinh</a>
				</LinkContainer>
			</div>
		</li>
	</ul>       
</nav>
)

export default Home