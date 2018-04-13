import React, { Component } from 'react'
import { connect } from 'react-redux'
import Proptypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'
import { loadStorageRecords, deleteStorageRecord } from '../../../actions/storageRecordActions'

export class Nhapkho extends Component {

  componentDidMount() {
    this.props.loadStorageRecords()
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
                    {this.props.storageRecords.map(record => (
                      <tr key={record.id}>
                        <td>{record.record_id}</td>
                        <td>{record.storage_type}</td>
                        <td>{record.created_at}</td>
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
                    ))}
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

export default connect(mapStateToProps, { loadStorageRecords, deleteStorageRecord })(Nhapkho)