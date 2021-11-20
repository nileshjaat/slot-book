import { SET_SLOTS } from './constants';
import { slots } from './dummyData';

const initialState = {
  slotsData: slots,
};

const SlotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLOTS:
      return {
        ...state,
        slotsData: action.payload,
      };

    default:
      return state;
  }
};

export default SlotsReducer;
