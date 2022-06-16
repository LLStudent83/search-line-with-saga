/* eslint-disable max-len */
import {
  call, put, takeLatest, spawn,
  debounce,
} from 'redux-saga/effects';
import { setField } from './features/search/searchSlice';
import searchSkills from './api/index';

// --------------------------------
function* handleSearchSkillsSaga(action) {
  try {
    const data = yield call(searchSkills, action.payload.search);
    yield put(setField({ loading: false, error: null, skills: data }));
  } catch (e) {
    yield put(setField({ loading: false, error: e.message }));
  }
}

function filterSearchSkillsSaga({ type, payload }) {
  return type === 'search/setField' && payload.loading === true;
}

function* watchSearchSkillsSaga() {
  yield takeLatest(filterSearchSkillsSaga, handleSearchSkillsSaga);
}
//--------------------------------------------------------------------------

function filterChangeSearchAction({ type, payload }) {
  return type === 'search/changeSearchField' && payload.search.trim() !== '';
}

function* watchChangeSearchSaga() {
  yield debounce(600, filterChangeSearchAction, handleChangeSearchSaga);
}

function* handleChangeSearchSaga({ payload }) {
  yield put(setField({ loading: true, error: null, search: payload.search }));
}

export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchSearchSkillsSaga);
}

// fork предписывает midlevare выполнить неблокирующий вызов функции
// take предписывает midlevare ожидать поступления actiona с определенным полем type
