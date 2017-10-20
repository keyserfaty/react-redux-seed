import { handleActions } from "redux-actions"

import * as actions from "./actions"

const initialState = {
  status: "init",
  error: "",
  items: [],
}

const reducer = handleActions({
  [actions.fetchAll.START]: (state) => ({
    ...state,
    status: "pending",
  }),

  [actions.fetchAll.FAILURE]: (state, action) => ({
    ...state,
    status: "failure",
    error: action.payload.error
  }),

  [actions.fetchAll.SUCCESS]: (state, action) => ({
    ...state,
    status: "success",
    items: action.payload.items
  }),

  [actions.create.START]: (state) => ({
    ...state,
    status: "pending",
  }),

  [actions.create.FAILURE]: (state, action) => ({
    ...state,
    status: "failure",
    error: action.payload.error
  }),

  [actions.create.SUCCESS]: (state, action) => ({
    ...state,
    status: "success",
    items: [
      ...state.items,
      ...action.payload.product
    ]
  }),

  [actions.remove.START]: (state) => ({
    ...state,
    status: "pending",
  }),

  [actions.remove.FAILURE]: (state, action) => ({
    ...state,
    status: "failure",
    error: action.payload.error
  }),

  [actions.remove.SUCCESS]: (state, action) => ({
    ...state,
    status: "success",
    items: [
      ...state.items
        .filter(e => e._id !== action.payload.product)
    ],
    ui: {
      ...state.ui,
      removeCandidate: ""
    }
  }),

}, initialState)

export default reducer
