import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function storageRecordReducer(state = initialState.storageRecords, action = initialState.action) {  
  switch(action.type) {
    case types.LOAD_STORAGE_RECORDS_SUCCESS:
      return action.storageRecords
    case types.DETELE_STORAGE_RECORDS_SUCCESS:
      return action.storageRecord
    default: 
      return state;
  }
}