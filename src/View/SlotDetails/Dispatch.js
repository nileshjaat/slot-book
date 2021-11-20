import { setSlotDetails } from './actions';

export function setSlotDetailsInfo(data) {
  return (dispatch) => {
    dispatch(setSlotDetails(data));
  };
}
