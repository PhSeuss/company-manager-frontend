import * as types from './actionTypes'
import storageRecordApi from '../api/storageRecordApi'

export function loadRecordSuccess(storageRecords) {  
    return {type: types.LOAD_STORAGE_RECORDS_SUCCESS, storageRecords}
}

export function loadStorageRecord() {  
  return function(dispatch) {
    return storageRecordApi.getAllRecords()
    .then(storageRecords => dispatch(loadRecordSuccess(storageRecords)))
    .catch(error => {throw(error)})
  }
}