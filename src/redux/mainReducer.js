import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView44642Reducer from '../features/CalendarView44642/redux/reducers';
import CalendarView44641Reducer from '../features/CalendarView44641/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView44642: CalendarView44642Reducer,
CalendarView44641: CalendarView44641Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});