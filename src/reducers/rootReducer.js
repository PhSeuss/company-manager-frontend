import { combineReducers } from 'redux'
import storageRecords from './storageRecordReducer'
import selectedStorageRecord from './selectedStorageRecordReducer'

const rootReducer = combineReducers({
	storageRecords,selectedStorageRecord
})

export default rootReducer
