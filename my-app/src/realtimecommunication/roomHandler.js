import store from "../store/store";
import { setOpenRoom } from "../store/actions/roomAction";

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
};
