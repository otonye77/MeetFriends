import { styled } from "@mui/system";
import AddFriendButton from "./addfriendbutton";
import FriendsTitle from "./friendtitle";
import FriendsList from "./friendslist/friendslist";
import PendingInvitationList from "./pendinginvitationlist/pendinginvitationlist";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});

const FriendsSidebar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList/>
      <FriendsTitle title="Invitation" />
      <PendingInvitationList />
    </MainContainer>
  );
};
export default FriendsSidebar;
