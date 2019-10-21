import { testReducer } from '../util'
import {
  LoadCalculatorInformation,
  UpdateFullTime,
  UpdateSpending,
} from './../../actions'
import calculator from './../jsons/calculator.json'

describe('Calculator reducer', () => {
  it('loads the data for calculator view', () => {
    testReducer(
      LoadCalculatorInformation(calculator),
      s => undefined,
      s => {
        s.calculator.title = calculator.calculator.title
        s.calculator.description = calculator.calculator.description
      },
    )
  })

  it('loads the data for calculator view with errors', () => {
    const response = new Error()
    testReducer(
      LoadCalculatorInformation(response),
      s => undefined,
      s => undefined,
    )
  })

  it('Update the spending value', () => {
    testReducer(
      UpdateSpending(100),
      s => {
        s.calculator.fullTime = 10
      },
      s => {
        s.calculator.fullTime = 10
        s.calculator.footCost = 30
        s.calculator.spending = 100
        s.calculator.annualSaving = 13400
      },
    )
  })

  it('Update the fullTime value', () => {
    testReducer(
      UpdateFullTime(8),
      s => {
        s.calculator.spending = 90
        s.calculator.footCost = 27
      },
      s => {
        s.calculator.fullTime = 8
        s.calculator.spending = 90
        s.calculator.footCost = 27
        s.calculator.annualSaving = 10723
      },
    )
  })
})
