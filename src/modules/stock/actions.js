import makeActionCreator from 'make-action-creator';

import { NAMESPACE } from './constants';

export const fetchAll = makeActionCreator(NAMESPACE + '/fetchAll');
export const fetchOne = makeActionCreator(NAMESPACE + '/fetchOne');
export const update = makeActionCreator(NAMESPACE + '/update');
export const remove = makeActionCreator(NAMESPACE + '/remove');
export const create = makeActionCreator(NAMESPACE + '/create');
