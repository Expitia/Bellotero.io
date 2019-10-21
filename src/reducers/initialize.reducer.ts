import { Reducer } from 'redux'
import { createReducer } from 'redux-starter-kit'
import * as Actions from '../actions/'

export type IState = boolean | null
export const defaultState: IState = null
const Initializing = () => true

export const initialize: Reducer<IState> = createReducer(defaultState, {
  [Actions.Initializing]: Initializing,
})
