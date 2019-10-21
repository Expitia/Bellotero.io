import { Reducer } from 'redux'
import { createReducer } from 'redux-starter-kit'
import * as Actions from '../actions'
import { IOption } from '../domain/models'

export interface IState {
  options: IOption[]
  defaultOption?: IOption
}

export const defaultState: IState = {
  options: [],
}

const setData = (state: IState, action) => {
  if (!(action.payload instanceof Error)) {
    const options = action.payload.menu.items
    state.options = options
    state.defaultOption = options[0]
  }
}

export const views: Reducer<IState> = createReducer(defaultState, {
  [Actions.LoadMenuInformation]: setData,
})
