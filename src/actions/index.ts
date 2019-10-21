import { Action } from 'redux'
import { createAction } from 'redux-starter-kit'
import {
  IResponseCalculator,
  IResponseMenu,
  IResponseSlider,
} from '../domain/models'

export const Initializing: ActionCreator<{}> = createAction('Initializing...')

export const LoadMenuInformation: ActionCreator<IResponseMenu> = createAction(
  'Load the initial to use in the header',
)

export const LoadReviewsInformation: ActionCreator<
  IResponseSlider
> = createAction('Load the reviews information')

export const LoadCalculatorInformation: ActionCreator<
  IResponseCalculator
> = createAction('Load the information to show in the calculator')

export const UpdateSpending: ActionCreator<number> = createAction(
  'Update the value of the monthly ingredient spending',
)
export const UpdateFullTime: ActionCreator<number> = createAction(
  'Update the value of the full-time employees that process invoices',
)

export type ActionCreator<P> = string &
  ((payload: P | Error) => Action<string> & { payload: P })
