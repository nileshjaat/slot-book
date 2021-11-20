import { SET_SLOT_DETAILS } from './constants';

const initialState = {
  slotDetailsData: [],
};

const SlotDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SLOT_DETAILS:
      return {
        ...state,
        slotDetailsData: action.payload,
      };

    default:
      return state;
  }
};

export default SlotDetailsReducer;
