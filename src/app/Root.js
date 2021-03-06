import React, { Component } from "react"
import PropTypes from "prop-types"
import { Router } from "react-router"
import { Provider } from "react-redux"
import routes from "./AppRouter"

class Root extends Component {
  render () {
    const { store, history } = this.props
    return (
      <Provider store={store}>
        <Router
          onUpdate={ () => window.scrollTo(0, 0) }
          history={history}
          routes={routes}
        />
      </Provider>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default Root
