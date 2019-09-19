import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.scss';
import App from './Components/App';
  // REDUX_STORE
import configStore from './Store/configStore'
  // FIREBASE
import './Database/firebase'

  // ACTION_GET_DATABASE
import { firebaseConnection } from './Actions/firebase-connection'

const store = configStore

const jsx = (
  <Provider store={ store }>
    <App />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'))

store.dispatch(firebaseConnection(
  ReactDOM.render(jsx, document.getElementById('root'))
))
// store.dispatch(actionGetSensor()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('root'))
// })
