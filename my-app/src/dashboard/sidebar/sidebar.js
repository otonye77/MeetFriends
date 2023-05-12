import { styled } from "@mui/system";
import MainPageButton from "./mainpagebutton";
import CreateRoomButton from "./createroombutton";
import ActiveRoomButton from "./ActiveRoomButton";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});

const Sidebar = ({ activeRooms, isUserInRoom }) => {
  console.log(activeRooms);
  return (
    <MainContainer>
      <MainPageButton />
      <CreateRoomButton />
      {activeRooms.map((room) => (
        <ActiveRoomButton
          roomId={room.roomId}
          creatorUsername={room.creatorUsername}
          amountOfParticipants={room.participants.length}
          key={room.roomId}
          isUserInRoom={isUserInRoom}
        />
      ))} 
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStoreStateToProps)(Sidebar);
