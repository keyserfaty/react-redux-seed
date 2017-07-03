import { NAMESPACE } from './constants';

export const getItems = state => state[NAMESPACE].items;
export const getStatus = state => state[NAMESPACE].status;
export const getError = state => state[NAMESPACE].error;

// ui
export const getCreateFormData = state => state[NAMESPACE].ui.create.formData;
export const getRemoveCandidate = state => state[NAMESPACE].ui.removeCandidate;
export const getEditCandidate = state => state[NAMESPACE].ui.editCandidate;
