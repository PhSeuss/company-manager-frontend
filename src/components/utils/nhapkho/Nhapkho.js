import React, { Component } from 'react'
import {connect} from 'react-redux'
import Proptypes from 'prop-types'
import { LinkContainer } from 'react-router-bootstrap'
import { loadStorageRecord, deleteStorageRecord } from '../../../actions/storageRecordActions'


export class Nhapkho extends Component {

	componentDidMount() {
		this.props.loadStorageRecord()
	}
	componentWillUnmount(){
		console.log('will umount')
	}
	indexRender(){
		return (
		  <div>
		    <h3>Trang quan li nhap kho</h3>
		      <table className="table table-hover">
			    <thead>
			      <tr>
			        <th>Ma Phieu</th>
			        <th>Loai Phieu</th>
			        <th>Ngay tao</th>
			      </tr>
			    </thead>
		        <tbody>
		          {this.props.storageRecords.map(record => (
				      <tr className="table-row" key={record.id} >
				        <td>{record.userId}</td>
				        <LinkContainer to={`/utils/nhapkho/${record.id}`}>
									<td>{record.title}</td>
								</LinkContainer>
				        <td>{record.id}</td>
								<td>
								<LinkContainer to={`/utils/nhapkho/${record.id}`}>
									<button type="button" className="btn btn-primary ">Edit</button>
								</LinkContainer>
									<button type="button" className="btn btn-danger " onClick={()=>this.props.deleteStorageRecord(record)}>Delete</button>
								</td>
							</tr>
		          	))}
			    </tbody>
			    </table>
		  </div>
		)
	}

	render() {
			return this.indexRender()
	}
}

Nhapkho.propTypes = {
	storageRecords: Proptypes.array.isRequired,
	loadStorageRecord: Proptypes.func.isRequired,
	deleteStorageRecord: Proptypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		storageRecords: state.storageRecords
	}
}

export default connect(mapStateToProps, { loadStorageRecord, deleteStorageRecord })(Nhapkho)