import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'


export default class Nhapkho extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="content">

                <div className="box box-primary">
                    <div className="box-body box-profile">
                        <h3 className="text-center">Thông tin nhập kho</h3>
                        <br />
                        <div className="row">
                            <form className="form-horizontal col-xs-12" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label for="inputNumber" className="col-sm-1 control-label">  Số phiếu</label>
                                    <div className="col-sm-4">
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputLoaiKho" className="col-sm-1 control-label">  Loại kho</label>

                                    <div className="col-sm-4">
                                        <input type="text" className="form-control" id="inputLoaiKho" placeholder="" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputDate" className="col-sm-1 control-label">  Ngày tạo</label>

                                    <div className="col-sm-4">
                                        <input type="date" className="form-control" id="inputDate" placeholder="" />
                                    </div>
                                </div>
                                <table id="userdata" className="table">
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
                                            <td><input type="text" className="col-sm-12"  value={this.state.value} onChange={this.handleChange}  /></td>
                                            <td><input type="asdas" className="col-sm-12" placeholder="ABC" disabled /></td>
                                            <td><input type="text" className="col-sm-12" placeholder="" /></td>
                                            <td><input type="text" className="col-sm-12" placeholder="" /></td>
                                            <td><input type="text" className="col-sm-12" placeholder="" /></td>
                                            <td><input type="text" className="col-sm-12" placeholder="" /></td>
                                            <td><input type="text" className="col-sm-12" placeholder="" /></td>
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
                                <input type="submit" className="btn btn-success" value="Xác nhận" />
                                <LinkContainer to="/GoodsReceipt/Index">
                                    <a href="#" className="btn btn-primary">Trở lại</a>
                                </LinkContainer>
                            </form>
                        </div>
                    </div>
                    {/* <!-- /.box-body --> */}
                </div>
            </div>
        ) 
    }
}
