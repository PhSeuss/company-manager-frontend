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
          <div className="col-md-6">
            <div className="nav-tabs-custom">
              <ul className="nav nav-tabs">
                <li className="active"><a href="#usermanager" data-toggle="tab">Quản Lý Phiếu Nhập Kho</a></li>
                <li><a href="#settings" data-toggle="tab">Quản Lý Thiết Bị</a></li>
              </ul>
              <div className="tab-content">
                <div className="active tab-pane" id="usermanager">
                  <div className="row">
                    <div className="col-xs-12">
                      <div className="box">
                        {/* <!-- /.box-header --> */}
                        <div className="box-body">
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
                                <a className="page-link" href="#" tabindex="-1">Previous</a>
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
                </div>
                <div className="tab-pane" id="settings">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <label for="inputName" className="col-sm-2 control-label">Name</label>

                      <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputName" placeholder="Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputEmail" className="col-sm-2 control-label">Email</label>

                      <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputName" className="col-sm-2 control-label">Name</label>

                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputName" placeholder="Name" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputExperience" className="col-sm-2 control-label">Experience</label>

                      <div className="col-sm-10">
                        <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputSkills" className="col-sm-2 control-label">Skills</label>

                      <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" /> I agree to the <a href="#">terms and conditions</a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-danger">Submit</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <!-- /.tab-pane --> */}
              </div>

              {/* <!-- /.tab-content --> */}
            </div>

          </div>
          {/* <!-- /.col --> */}
          <div className="col-md-6">
            <PhieuNhapKho />

            {/* <!-- /.nav-tabs-custom --> */}
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