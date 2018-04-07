import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'


const PhieuNhapKho = () => (
    <div className="box box-primary">
        <div className="box-body box-profile">
            {/* <img className="profile-user-img img-responsive img-circle" src="../../dist/img/user2-160x160.jpg" alt="User profile picture" /> */}

            <h3 className="profile-username text-center">Record Details</h3>

            <p className="text-muted text-center">Some Bullshit</p>

            <ul className="list-group list-group-unbordered">
                <li className="list-group-item">
                    <b>title</b> <a className="pull-right">nonsense</a>
                </li>
                <li className="list-group-item">
                    <b>id</b> <a className="pull-right">5</a>
                </li>
            </ul>
            <LinkContainer to="/GoodsReceipt/Index">
                <a href="#" className="btn btn-primary btn-block"><b>Edit</b></a>
            </LinkContainer>

        </div>
        {/* <!-- /.box-body --> */}
    </div>

)

export default PhieuNhapKho