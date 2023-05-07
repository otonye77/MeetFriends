import store from "../store/store";
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
} from "../store/actions/roomAction";
import * as socketConnection from "./socketConnection";

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
  socketConnection.createNewRoom();
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};

export const updateActiveRooms = (data) => {
  const { activeRooms } = data;
  //rooms that the creator is our friend
  const friends = store.getState().friends.friends;
  const rooms = [];
  activeRooms.forEach((room) => {
    friends.forEach((f) => {
      if (f.id === room.roomCreator.userId) {
        rooms.push({ ...room, creatorUsername: f.username });
      }
    });
  });
  store.dispatch(setActiveRooms(rooms));
};
