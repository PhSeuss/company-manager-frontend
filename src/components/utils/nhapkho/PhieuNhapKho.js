import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'


const PhieuNhapKho = () => (
    <div className="content">
        
        <div className="box box-primary">
            <h3 className="text-center">Thông tin nhập kho</h3>
            <div className="box-body box-profile">

                <div className="row">
                    <div className="col-xs-2">
                        <br />
                        <p><b>Số phiếu</b></p>
                        <p><b>Loại kho</b></p>
                        <p><b>Ngày tạo phiếu</b></p>
                        <br />
                    </div>
                    <div className="col-xs-3">
                        <br />
                        <p>000002</p>
                        <p>Nguyên vật liệu</p>
                        <p>12/03/2018</p>
                        <br />
                    </div>
                </div>
                    <table id="userdata" className="table table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã hàng hóa</th>
                                <th>Tên hàng hóa</th>
                                <th>ĐVT</th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền</th>
                                <th>Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>NVL</td>
                                <td>ABC</td>
                                <td>Cái</td>
                                <td>12</td>
                                <td>23000</td>
                                <td>100000</td>
                                <td>Bullshit</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>NVL</td>
                                <td>ABC</td>
                                <td>Cái</td>
                                <td>12</td>
                                <td>23000</td>
                                <td>100000</td>
                                <td>Bullshit</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>NVL</td>
                                <td>ABC</td>
                                <td>Cái</td>
                                <td>12</td>
                                <td>23000</td>
                                <td>100000</td>
                                <td>Bullshit</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                <LinkContainer to="/GoodsReceipt/Index">
                    <a href="#" className="btn btn-primary"><b>Edit</b></a>
                </LinkContainer>
                <LinkContainer to="/GoodsReceipt/Index">
                    <a href="#" className="btn btn-primary"><b>Back</b></a>
                </LinkContainer>

            </div>
            {/* <!-- /.box-body --> */}
        </div>
    </div>
)

export default PhieuNhapKho