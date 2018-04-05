import * as types from './actionTypes'
import storageRecordApi from '../api/storageRecordApi'

export function loadRecordSuccess(storageRecords) {  
    return {type: types.LOAD_STORAGE_RECORDS_SUCCESS, storageRecords}
}
export function deleteRecordSuccess(storageRecord) {  
  return {type: types.DETELE_STORAGE_RECORDS_SUCCESS, storageRecord}
}

export function loadStorageRecord() {  
  return (dispatch) => storageRecordApi.getAllRecords()
    .then(storageRecords => dispatch(loadRecordSuccess(storageRecords)))
    .catch(error => {throw(error)})

}

export function deleteStorageRecord(storageRecord) {
  return (dispatch) => storageRecordApi.deleteRecord(storageRecord)
    .then((message) => {
      console.log(message)
      dispatch(deleteRecordSuccess(storageRecord))
    })
    .catch(error => {throw(error)})
}