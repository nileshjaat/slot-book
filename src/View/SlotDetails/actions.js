import { SET_SLOT_DETAILS } from './constants';

export function setSlotDetails(data) {
  return {
    type: SET_SLOT_DETAILS,
    payload: data,
  };
}
