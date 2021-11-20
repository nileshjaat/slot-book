import { setSlots } from './actions';

export function setSlotsInfo(data) {
  return (dispatch) => {
    dispatch(setSlots(data));
  };
}
