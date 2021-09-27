import {combineReducers} from 'redux'


import { collectionReducer } from './collectionReducer'


export const rootReducer = combineReducers({
        collections : collectionReducer
})