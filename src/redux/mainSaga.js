import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView44643Saga from '../features/CalendarView44643/redux/sagas';
import CalendarView44642Saga from '../features/CalendarView44642/redux/sagas';
import CalendarView44641Saga from '../features/CalendarView44641/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView44643Saga,
CalendarView44642Saga,
CalendarView44641Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}