import { LoadMenuInformation } from '../../actions'
import { testReducer } from '../util'
import header from './../jsons/header.json'

describe('Views reducer', () => {
  it('loads the data for header view', () => {
    testReducer(
      LoadMenuInformation(header),
      s => undefined,
      s => {
        s.views.options = header.menu.items
        s.views.defaultOption = header.menu.items[0]
      },
    )
  })

  it('loads the data for header view with errors', () => {
    const response = new Error()
    testReducer(LoadMenuInformation(response), s => undefined, s => undefined)
  })
})
