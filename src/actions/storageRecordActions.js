import * as types from './actionTypes'
import storageRecordApi from '../api/storageRecordApi'

export function loadRecordsSuccess(storageRecords) {  
    return {type: types.LOAD_STORAGE_RECORDS_SUCCESS, storageRecords}
}
export function loadSelectedRecordSuccess(selectedStorageRecord) {  
    return {type: types.LOAD_SELECTED_STORAGE_RECORD_SUCCESS, selectedStorageRecord}
}
export function deleteRecordSuccess(storageRecord) {  
  return {type: types.DETELE_STORAGE_RECORDS_SUCCESS, storageRecord}
}


export function loadStorageRecords() {  
  return (dispatch) => storageRecordApi.getAllRecords()
    .then(storageRecords => dispatch(loadRecordsSuccess(storageRecords)))
    .catch(error => {throw(error)})
}

export function loadSelectedRecord(recordId) {  
  return (dispatch) => storageRecordApi.getSelectedRecord(recordId)
    .then(selectedStorageRecord => dispatch(loadSelectedRecordSuccess(selectedStorageRecord)))
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