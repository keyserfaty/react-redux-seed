import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors';
import * as actions from '../actions';

import { withHooks } from '../../../utils/withHooks';

const List = props => {
  const { items, status, error } = props;
  console.log(items)

  return (
    <div>
      <div>
        holi 2
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  items: selectors.getItems(state),
  status: selectors.getStatus(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  onMount: () => {
    dispatch(actions.fetchAll());
  },
  onUnmount: () => dispatch(actions.cleanState()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withHooks(List));
