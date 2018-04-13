import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { loadSelectedRecord } from '../../../actions/storageRecordActions'




export class PhieuNhapKho extends Component {
    constructor(props) {
      super(props);
        props.loadSelectedRecord(props.match.params.recordId)
      }
    componentDidMount() {
        
    }
    componentWillUnmount(){
    }
    render() {
        const record = this.props.selectedRecord
        const items = record.storage_items
        return (
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
                        <p>{record.record_id}</p>
                        <p>{record.storage_type}</p>
                        <p>{record.created_at}</p>
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
                          {record.storage_items.map(item => (
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.ma_hang}</td>
                              <td>{item.ten_hang}</td>
                              <td>{item.dvt}</td>
                              <td>{item.so_luong}</td>
                              <td>{item.don_gia}</td>
                              <td>{item.thanh_tien}</td>
                              <td>{item.ghi_chu}</td>
                            </tr>
                            ))}

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
    }
}


function mapStateToProps(state) {
  return {
    selectedRecord: state.selectedStorageRecord
  }
}

export default connect(
    mapStateToProps, { loadSelectedRecord }
    )(PhieuNhapKho)