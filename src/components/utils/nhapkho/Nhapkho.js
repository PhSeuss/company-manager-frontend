import React, { Component } from 'react'
import {connect} from 'react-redux'
import Proptypes from 'prop-types'
import { loadStorageRecord } from '../../../actions/loadStorageRecord'

export class Nhapkho extends Component {
	constructor(props) {
	  super(props);
		  this.state = {
		    detailRender: false,
		    selectedRecord: 0
		  };
		}
	componentDidMount() {
		this.props.loadStorageRecord()
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
				      <tr className="table-row" key={record.id} onClick={() => this.renderDetail(record.id)}>
				        <td>{record.userId}</td>
				        <td>{record.title}</td>
				        <td>{record.id}</td>
				      </tr>
		          	))}

			    </tbody>
			    </table>
		  </div>
		)
	}
	detailRender(){
		const item = this.props.storageRecords[this.state.selectedRecord]
		return (
			<div>
				<span>Ma Phieu: </span>
				<span>{item.userId}</span> <br/>
				<span>Loai Phieu: </span>
				<span>{item.title}</span> <br/>
				<span>Ngay Tao: </span>
				<span>{item.id}</span> <br/>
				<span>Noi Dung: </span>
				<p>{item.body}</p>
				<button type="button" className="btn btn-secondary" onClick={()=>this.renderIndex()}>Back</button>
			</div>
		)

	}
	renderDetail(recordId){
		this.setState({
			detailRender: true,
			selectedRecord: recordId
		})
	}
	renderIndex(){
		this.setState({
			detailRender: false
		})
	}
	render() {
		if(this.state.detailRender)
			return this.detailRender(this.state.selectedRecord)
		return this.indexRender()
	}
}

Nhapkho.propTypes = {
	storageRecords: Proptypes.array.isRequired,
	loadStorageRecord: Proptypes.func.isRequired

}

function mapStateToProps(state) {
	return {
		storageRecords: state.storageRecords
	}
}

export default connect(mapStateToProps, { loadStorageRecord })(Nhapkho)