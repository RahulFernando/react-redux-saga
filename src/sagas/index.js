import { fork } from "redux-saga/effects"
import PostSaga from "./post"

export default function* rootSaga() {
    yield fork(PostSaga);
}