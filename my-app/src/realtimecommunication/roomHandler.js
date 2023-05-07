import store from "../store/store";
import { setOpenRoom } from "../store/actions/roomAction";
import * as socketConnection from "./socketConnection";

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
  socketConnection.createNewRoom();
};
