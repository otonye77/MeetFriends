const initState = {
  isUserInRoom: false,
  isUserRoomCreator: false,
  roomDetails: null,
  activeRoom: [],
  localStream: null,
  remoteStreams: [],
  audioOnly: false,
  screenSharingStream: null,
  isScreenSharingActive: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
