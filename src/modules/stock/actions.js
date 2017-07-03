import makeActionCreator from 'make-action-creator';

import { NAMESPACE } from './constants';

export const fetchAll = makeActionCreator(NAMESPACE + '/fetchAll');
export const fetchOne = makeActionCreator(NAMESPACE + '/fetchOne');
export const update = makeActionCreator(NAMESPACE + '/update');
export const remove = makeActionCreator(NAMESPACE + '/remove');
export const create = makeActionCreator(NAMESPACE + '/create');

//* ui
export const onChange = makeActionCreator(NAMESPACE + '/onChange');
export const closeAlertBox = makeActionCreator(NAMESPACE + '/closeAlertBox');

export const onImage = makeActionCreator(NAMESPACE + '/onImage');
export const onRemoveImage = makeActionCreator(NAMESPACE + '/onRemoveImage');
export const onRemoveCandidate = makeActionCreator(NAMESPACE + '/onRemoveCandidate');
export const onEditCandidate = makeActionCreator(NAMESPACE + '/onEditCandidate');

export const cleanState = makeActionCreator(NAMESPACE + '/cleanState');
export const cleanForm = makeActionCreator(NAMESPACE + '/cleanForm');
