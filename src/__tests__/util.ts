import { createBrowserHistory } from 'history'
import { AnyAction } from 'redux'
import { createNextState } from 'redux-starter-kit'
import reducerWithComputedValues, { IState } from '../reducers'
import { defaultState as defaultCalculator } from '../reducers/calculator.reducer'
import { defaultState as defaultInitialize } from '../reducers/initialize.reducer'
import { defaultState as defaultTestimonial } from '../reducers/testimonial.reducer'
import { defaultState as defaultStateView } from '../reducers/views.reducer'

export const history = createBrowserHistory()

export const defaultState = {
  router: {
    action: 'POP',
    location: {
      hash: '',
      pathname: '/',
      search: '',
      state: undefined,
    },
  },
  views: defaultStateView,
  calculator: defaultCalculator,
  initialize: defaultInitialize,
  testimonial: defaultTestimonial,
}

export const testReducer = (
  action: AnyAction,
  prevStateFn: (s: IState) => void,
  nextStateFn: (s: IState) => void,
) => {
  const prevState = createNextState(defaultState, prevStateFn)
  const nextState = createNextState(defaultState, nextStateFn)
  const resultState = reducerWithComputedValues(history)(prevState, action)

  expect(resultState).toEqual(nextState)
}
