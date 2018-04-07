import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'

const Sidebar = () => (
    <aside className="main-sidebar">
        {/* <!-- sidebar: style can be found in sidebar.less --> */}
        <section className="sidebar">
            {/* <!-- search form --> */}
            <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                        <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search" />
                        </button>
                    </span>
                </div>
            </form>
            {/* <!-- /.search form --> */}
            {/* <!-- sidebar menu: : style can be found in sidebar.less --> */}
            <ul className="sidebar-menu">
                <li className="header">MAIN MENU</li>
                <li className="active treeview">
                    <a href="#">
                        <i className="fa fa-folder-open" /> <span> Tác Vụ</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right" />
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <LinkContainer to="/GoodsReceipt/Index">
                            <li><a href="index.html"><i className="fa fa-circle-o" /> Nhập Kho</a></li>
                        </LinkContainer>
                        <LinkContainer to="/GoodsIssue/Index">
                            <li><a href="#"><i className="fa fa-circle-o" /> Xuất Kho</a></li>
                        </LinkContainer>
                    </ul>
                </li>
                <li>
                    <a href="">
                        <i className="fa fa-calendar" /> <span>Kế Hoạch</span>
                        <span className="pull-right-container">
                            <small className="label pull-right bg-red">3</small>
                            <small className="label pull-right bg-blue">17</small>
                        </span>
                    </a>
                </li>

                <li className="header">LABELS</li>
                <LinkContainer to="/About">
                    <li><a href=""><i className="fa fa-circle-o text-red" /> <span>Về Công Ty</span></a></li>
                </LinkContainer>
                <LinkContainer to="/Contact">
                    <li><a href=""><i className="fa fa-circle-o text-yellow" /> <span>Liên Hệ</span></a></li>
                </LinkContainer>
            </ul>
        </section>
        {/* <!-- /.sidebar --> */}
    </aside>

)


export default Sidebar