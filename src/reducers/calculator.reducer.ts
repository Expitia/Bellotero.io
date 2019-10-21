import { Reducer } from 'redux'
import { createReducer } from 'redux-starter-kit'
import * as Actions from '../actions'

export interface IState {
  title: string
  spending: number
  fullTime: number
  footCost: number
  annualSaving: number
  description: string
}

export const defaultState: IState = {
  title: '',
  spending: 0,
  fullTime: 0,
  footCost: 0,
  description: '',
  annualSaving: 0,
}

const setData = (state: IState, { payload }) => {
  if (!(payload instanceof Error)) {
    state.title = payload.calculator.title
    state.description = payload.calculator.description
  }
}

const updateSpending = (state: IState, { payload }) => {
  const newFootCost = payload * 0.3
  state.spending = payload
  state.footCost = newFootCost
  state.annualSaving = state.fullTime * 1337 + newFootCost
}

const updateFullTime = (state: IState, { payload }) => {
  state.fullTime = payload
  state.annualSaving = payload * 1337 + state.footCost
}

export const calculator: Reducer<IState> = createReducer(defaultState, {
  [Actions.UpdateSpending]: updateSpending,
  [Actions.UpdateFullTime]: updateFullTime,
  [Actions.LoadCalculatorInformation]: setData,
})
