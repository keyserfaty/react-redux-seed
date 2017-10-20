import React from "react"
import { connect } from "react-redux"

import * as selectors from "../selectors"
//import * as actions from '../actions';

import { withHooks } from "../../../utils/withHooks"

const List = () => {
  return (
    <div>
      Hi there!
    </div>
  )
}

const mapStateToProps = state => ({
  items: selectors.getItems(state),
  status: selectors.getStatus(state),
  error: selectors.getError(state),
})

const mapDispatchToProps = () => ({
  //onMount: () => dispatch(actions.fetchAll()),
  //onUnmount: () => dispatch(actions.cleanState()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List))
