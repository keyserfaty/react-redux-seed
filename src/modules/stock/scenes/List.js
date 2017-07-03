import React from 'react';
import { connect } from 'react-redux';

import * as selectors from '../selectors';
import * as actions from '../actions';

import { withHooks } from '../../../utils/withHooks';

const List = props => {
  const { items, status, error } = props;

  return (
    <div>
      <div>
        { status === 'pending' && <div>Is loading...</div> }
        { status === 'failure' && <div>There was an error: {error}</div>}

        { (status === 'success' && items.length !== 0) && (
           <ul>
             { items.map((item, i) => <li key={i}>{item.label}</li>) }
           </ul>
        )}
        { (status === 'success' && items.length === 0) && (
          <div>List is empty</div>
        )}
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
