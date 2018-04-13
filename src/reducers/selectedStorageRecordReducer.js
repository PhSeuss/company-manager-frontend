import * as types from '../actions/actionTypes';  
import initialState from './initialState';

export default function selectedStorageRecordReducer(
	state = initialState.selectedStorageRecord,
	action = initialState.action) {  
  switch(action.type) {
    case types.LOAD_SELECTED_STORAGE_RECORD_SUCCESS:
      return action.selectedStorageRecord
    default: 
      return state;
  }
}
