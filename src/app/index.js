import React, { Component } from 'react';
// o provider faz a ligacao da store com a aplicacao react
import { Provider } from 'react-redux'
import store from './store'
import Aplicacao from './components/aplicacao';

class App extends Component{
  render(){
      return (
        <Provider store={store}>
          <div className="App">
            <Aplicacao />
          </div>
        </Provider>
      )
  }
}

  export default App


    
  