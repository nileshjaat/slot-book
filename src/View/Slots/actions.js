import { SET_SLOTS } from './constants';

export function setSlots(data) {
  return {
    type: SET_SLOTS,
    payload: data,
  };
}
