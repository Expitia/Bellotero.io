import { connectRouter, RouterState } from 'connected-react-router'
import { AnyAction, combineReducers, Reducer } from 'redux'
import { calculator, IState as ICalculatorState } from './calculator.reducer'
import { initialize, IState as IInitializeState } from './initialize.reducer'
import { IState as ITestimonialState, testimonial } from './testimonial.reducer'
import { IState as IViewsState, views } from './views.reducer'

export interface IState {
  views: IViewsState
  router: RouterState
  calculator: ICalculatorState
  initialize: IInitializeState
  testimonial: ITestimonialState
}

const createRootReducer = (history: History): Reducer<IState, AnyAction> =>
  combineReducers({
    views,
    initialize,
    calculator,
    testimonial,
    router: connectRouter(history),
  })

export default createRootReducer
