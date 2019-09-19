import React from 'react';
import Header from './header/header'
import Navigation from './navigation/navigation'
import Main from './main/Router'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import Preloader from './_preloader'

const App = (props) => {

    // PRELOADER HERE !!!!
    // If length of arrays = 0 showing preloader
    // For simutation realtime loading

  const { infrastructure } = props.data  
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation />
        <div className="wrapper">
          <Header />
          <div>
            <CSSTransition
              in={ infrastructure.length === 0}
              timeout={ 100 }
              classNames="load"
              unmountOnExit>
              <Preloader/>
            </CSSTransition>
            <CSSTransition
              in={ infrastructure.length > 0}
              timeout={ 700 }
              classNames="loaded">
              <Main />
            </CSSTransition>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );

}
const mapStateToProps = (state) => {
  return {
    data: state
  }
}
export default connect(mapStateToProps)(App)