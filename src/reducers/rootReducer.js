import { combineReducers } from 'redux'
import storageRecords from './storageRecordReducer'

const rootReducer = combineReducers({
	storageRecords
})

export default rootReducer
