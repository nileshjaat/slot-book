import { combineReducers } from 'redux';
import SlotsReducer from './View/Slots/reducer';
import SlotDetailsReducer from './View/SlotDetails/reducer';

const rootReducer = combineReducers({
  slots: SlotsReducer,
  slotDetails: SlotDetailsReducer,
});

export default rootReducer;
