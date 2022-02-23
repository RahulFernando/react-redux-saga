import { takeEvery, put, call } from 'redux-saga/effects';

// service
import service from '../services/post';

// reducer
import * as postAction from '../reducers/post';

function* fetchPosts() {
  try {
    const response = yield call(service.getPosts);

    if (response.status === 200) {
      yield put(postAction.fetchPostSuccess(response.data));
    } else {
      yield put(postAction.fetchPostSuccess(response.message));
    }
  } catch (error) {
    yield put(postAction.fetchPostError(error.message));
  }
}

function* PostSaga() {
  yield takeEvery(postAction.fetchPost, fetchPosts);
}

export default PostSaga;
