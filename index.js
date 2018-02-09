import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import AppReducer from './src/reducers'
import AppWithNavigationState from './src/navigators/AppNavigator'
import { middleware } from './src/utils/redux'

const store = createStore(
  AppReducer,
  applyMiddleware(middleware, logger),
)

class ReduxExampleApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReduxExampleApp)

export default ReduxExampleApp
