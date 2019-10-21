import { Reducer } from 'redux'
import { createReducer } from 'redux-starter-kit'
import * as Actions from '../actions'
import { IReview } from '../domain/models'

export interface IState {
  title: string
  reviews: IReview[]
}

export const defaultState: IState = {
  title: '',
  reviews: [],
}

const setData = (state: IState, { payload }) => {
  if (!(payload instanceof Error)) {
    state.title = payload.slider.title
    state.reviews = payload.slider.reviews
  }
}

export const testimonial: Reducer<IState> = createReducer(defaultState, {
  [Actions.LoadReviewsInformation]: setData,
})
