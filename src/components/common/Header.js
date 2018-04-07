import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'


const Home = () => (
	<header className="main-header">
		{/* <!-- Logo --> */}
		<LinkContainer to="/">
			<a href="" className="logo">
				{/* <!-- mini logo for sidebar mini 50x50 pixels --> */}
				{/* <span className="logo-mini"><b>COMPANY</b></span> */}
				{/* <!-- logo for regular state and mobile devices --> */}
				<span className="logo-lg"><b>MY</b> COMPANY</span>
			</a>
		</LinkContainer>
		{/* <!-- Header Navbar: style can be found in header.less --> */}
		<nav className="navbar navbar-static-top">
			{/* <!-- Sidebar toggle button--> */}
			<a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
				<span className="sr-only">Toggle navigation</span>
			</a>

			<div className="navbar-custom-menu">
				<ul className="nav navbar-nav">
					{/* <!-- Messages: style can be found in dropdown.less--> */}
					<li className="dropdown messages-menu">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<i className="fa fa-envelope-o" />
							<span className="label label-success">4</span>
						</a>
						<ul className="dropdown-menu">
							<li className="header">You have 4 messages</li>
							<li>
								{/* <!-- inner menu: contains the actual data --> */}
								<ul className="menu">
									<li>
										{/* <!-- start message --> */}
										<a href="#">
											<div className="pull-left">
												<img src="dist/img/user2-160x160.jpg" className="img-circle" alt="" />
											</div>
											<h4>
												Support Team
                        <small><i className="fa fa-clock-o" /> 5 mins</small>
											</h4>
											<p>Why not buy a new awesome theme?</p>
										</a>
									</li>
									{/* <!-- end message --> */}
									<li>
										<a href="#">
											<div className="pull-left">
												<img src="dist/img/user3-128x128.jpg" className="img-circle" alt="" />
											</div>
											<h4>
												AdminLTE Design Team
                        <small><i className="fa fa-clock-o" /> 2 hours</small>
											</h4>
											<p>Why not buy a new awesome theme?</p>
										</a>
									</li>
									<li>
										<a href="#">
											<div className="pull-left">
												<img src="dist/img/user4-128x128.jpg" className="img-circle" alt="" />
											</div>
											<h4>
												Developers
                        <small><i className="fa fa-clock-o" /> Today</small>
											</h4>
											<p>Why not buy a new awesome theme?</p>
										</a>
									</li>
								</ul>
							</li>
							<li className="footer"><a href="#">See All Messages</a></li>
						</ul>
					</li>

					{/* <!-- User Account: style can be found in dropdown.less --> */}
					<li className="dropdown user user-menu">
						<a href="#" className="dropdown-toggle" data-toggle="dropdown">
							<img src="dist/img/user2-160x160.jpg" className="user-image" alt="" />
							<span className="hidden-xs">Hi im noone</span>
						</a>
						<ul className="dropdown-menu">
							{/* <!-- User image --> */}
							<li className="user-header">
								<img src="dist/img/user2-160x160.jpg" className="img-circle" alt="" />
								<p>
									anonymos - shitty job
                  <small>Member since Nov. 2012</small>
								</p>
							</li>
							{/* <!-- Menu Footer--> */}
							<li className="user-footer">
								<div className="pull-left">
									<a href="#" className="btn btn-default btn-flat">Profile</a>
								</div>
								<div className="pull-right">
									<a href="#" className="btn btn-default btn-flat">Sign out</a>
								</div>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	</header>
)

export default Home