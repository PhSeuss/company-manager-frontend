import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import storageRecordApi from '../../../api/storageRecordApi'

export default class Nhapkho extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      number: "",
      storage_type: "",
      created_at: (new Date()).toLocaleString(),
      good_index_items:[
        {
          stt: 1,
          ma_hang: "",
          ten_hang: "",
          dvt: "",
          so_luong: "",
          don_gia: "",
          thanh_tien: "",
          ghi_chu: ""
        }
      ]
    }
    this.tempArray = this.state.good_index_items
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  changeSoPhieu(event) {
    this.setState({
      number: event.target.value
    })
  }
  changeLoaiKho(event) {
    this.setState({
      storage_type: event.target.value
    })
  }
  changeNgayTao(event) {
     this.setState({
      created_at: event.target.value
    })
  }
  changeMaHang(event,stt) {
    this.tempArray[stt-1].ma_hang = event.target.value
  }
  changeTenHang(event,stt) {
    this.tempArray[stt-1].ten_hang = event.target.value
  }
  changeDvt(event,stt) {
    this.tempArray[stt-1].dvt = event.target.value
  }
  changeDonGia(event,stt) {
    this.tempArray[stt-1].don_gia = event.target.value
  }
  changeThanhTien(event,stt) {
    this.tempArray[stt-1].thanh_tien = event.target.value
  }
  changeSoLuong(event,stt) {
    this.tempArray[stt-1].so_luong = event.target.value
  }
  changeGhiChu(event,stt) {
    this.tempArray[stt-1].ghi_chu = event.target.value
  }
  handleSubmit(event) {
    this.setState({
      good_index_items: this.tempArray
    })
      event.preventDefault();
    console.log(this.state);
    storageRecordApi.createRecord(this.state)
  }
  handleAdd() {
    const newItem = { 
          stt: this.state.good_index_items.length + 1,
          ma_hang: "",
          ten_hang: "",
          dvt: "",
          so_luong: "",
          don_gia: "",
          thanh_tien: "",
          ghi_chu: ""
    }
    this.tempArray = this.state.good_index_items;
    this.tempArray.push(newItem)
    this.setState({
        good_index_items: this.tempArray
      })
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
                          <label className="col-sm-1 control-label" >Số phiếu</label>
                          <div className="col-sm-4">
                              <input type="text" className="form-control" onChange={(e)=>this.changeSoPhieu(e)} />
                          </div>
                      </div>
                      <div className="form-group">
                          <label className="col-sm-1 control-label" >Loại kho</label>
                          <div className="col-sm-4">
                              <input type="text" className="form-control"  onChange={(e)=>this.changeLoaiKho(e)} />
                          </div>
                      </div>
                      <div className="form-group">
                          <label className="col-sm-1 control-label">Ngày tạo</label>
                          <div className="col-sm-4">
                              <input type="text" className="form-control" value={this.state.created_at} onChange={(e)=>this.changeNgayTao(e)} />
                              <span> (mm/dd/yy, hh:mm:ss AM/PM)</span>
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
                          {this.state.good_index_items.map(item => (
                            <tr key={item.stt}>
                              <td>{item.stt}</td>
                              <td><input type="text" className="col-sm-12" onChange={(e)=>this.changeMaHang(e,item.stt)} /></td>
                              <td><input type="text" className="col-sm-12" onChange={(e)=>this.changeTenHang(e,item.stt)}/></td>
                              <td><input type="text" className="col-sm-12" onChange={(e)=>this.changeDvt(e,item.stt)}/></td>
                              <td><input type="text" className="col-sm-12" onChange={(e)=>this.changeSoLuong(e,item.stt)}/></td>
                              <td><input type="text" className="col-sm-12" onChange={(e)=>this.changeDonGia(e,item.stt)}/></td>
                              <td><input type="text" className="col-sm-12" onChange={(e)=>this.changeThanhTien(e,item.stt)}/></td>
                              <td><input type="text" className="col-sm-12" onChange={(e)=>this.changeGhiChu(e,item.stt)}/></td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                        <button type = "button"className="btn btn-info col-sm-2" onClick={()=>this.handleAdd()}>Them hang</button><br/><br/>
                        <input type="submit" className="btn btn-success col-sm-1" value="Xác nhận" />
                        <LinkContainer to="/GoodsReceipt/Index">
                            <a href="#" className="btn btn-primary col-sm-1">Trở lại</a>
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
