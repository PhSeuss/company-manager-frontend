import React, { Component } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'
import { loadStorageRecord, deleteStorageRecord } from '../../../actions/storageRecordActions'
import PhieuNhapKho from './PhieuNhapKho';

export class Nhapkho extends Component {

  componentDidMount() {
    this.props.loadStorageRecord()
  }
  componentWillUnmount() {
    console.log('will umount')
  }
  render() {
    return (
      <section className="content">

        <div className="row">
          <div className="col-xs-12">
            <h3> QUẢN LÝ PHIẾU NHẬP KHO </h3>
            <div className="box" >
              {/* <!-- /.box-header --> */}
              <div className="box-body">
                <LinkContainer to="/GoodsReceipt/new">
                  <p><button type="button" className="btn btn-info">Tạo mới +</button></p>
                </LinkContainer>

                <table id="userdata" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Mã số phiếu</th>
                      <th>Tên loại kho</th>
                      <th>Ngày lập phiếu</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>000012</td>
                      <td>Nguyên vật liệu</td>
                      <td>12/03/2018</td>
                      <td>
                        <div className="btn-group">
                          <LinkContainer to="/GoodsReceipt/Record/1">
                            <button type="button" className="btn btn-success">Details</button>
                          </LinkContainer>
                          <button type="button" className="btn btn-primary">Edit</button>
                          <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>000012</td>
                      <td>Nguyên vật liệu</td>
                      <td>12/03/2018</td>
                      <td>
                        <div className="btn-group">
                          <LinkContainer to="/GoodsReceipt/Record/1">
                            <button type="button" className="btn btn-success">Details</button>
                          </LinkContainer>
                          <button type="button" className="btn btn-primary">Edit</button>
                          <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>000012</td>
                      <td>Nguyên vật liệu</td>
                      <td>12/03/2018</td>
                      <td>
                        <div className="btn-group">
                          <button type="button" className="btn btn-success">Action</button>
                          <button type="button" className="btn btn-success dropdown-toggle" data-toggle="dropdown">
                            <span className="caret" />
                            <span className="sr-only">Toggle Dropdown</span>
                          </button>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="#">Edit</a></li>
                            <li><a href="#">Delete</a></li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  </tbody>

                </table>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabIndex="-1">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* <!-- /.box-body --> */}
            </div>
            {/* <!-- /.box --> */}
          </div>
          {/* <!-- /.col --> */}
        </div>
        {/* <!-- /.row --> */}

      </section>
    )
  }
}

// Nhapkho.propTypes = {
// 	storageRecords: Proptypes.array.isRequired,
// 	loadStorageRecord: Proptypes.func.isRequired,
// 	deleteStorageRecord: Proptypes.func.isRequired
// }

function mapStateToProps(state) {
  return {
    storageRecords: state.storageRecords
  }
}

export default connect(mapStateToProps, { loadStorageRecord, deleteStorageRecord })(Nhapkho)