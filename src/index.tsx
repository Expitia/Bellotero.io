import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Initializing } from './actions/'
import App from './containers/app'
import { addSideEffectsToStore } from './effects/'
import { history, NewStore, StoreType } from './reducers/store'
import './styles/index.scss'

const store: StoreType = NewStore()
addSideEffectsToStore(store)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)

store.dispatch(Initializing({}))
