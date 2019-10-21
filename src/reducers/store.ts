import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { ObservableInput } from 'rxjs'
import createRootReducer, { IState } from './'

export const history = createBrowserHistory()

export const NewStore = (initialState?) => {
  const middleWare = composeWithDevTools(
    applyMiddleware(routerMiddleware(history)),
  )
  return createStore(
    createRootReducer(history),
    initialState,
    middleWare,
  ) as Store<IState> & ObservableInput<IState>
}

export type StoreType = ReturnType<typeof NewStore>
