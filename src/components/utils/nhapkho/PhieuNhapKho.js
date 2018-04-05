import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'


const PhieuNhapKho = ({ match }) => (
    <div>
        <span>Ma Phieu: </span>
        <span>{match.params.recordId}</span> <br/>
        {/* <span>Loai Phieu: </span>
        <span>{item.title}</span> <br/>
        <span>Ngay Tao: </span>
        <span>{item.id}</span> <br/>
        <span>Noi Dung: </span>
        <p>{item.body}</p> */}
        <button type="button" className="btn btn-secondary">Edit</button>    
        <LinkContainer to="/utils/nhapkho">
            <button type="button" className="btn btn-secondary">Back</button>  
        </LinkContainer>  
    </div>
  )
  
  export default PhieuNhapKho