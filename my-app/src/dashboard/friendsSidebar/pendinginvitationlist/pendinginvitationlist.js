import { styled } from "@mui/system";
import PendingInvitationListItem from "./pendinginvitationlistitem";

const DUMMY_INVITATION = [
  {
    _id: "1",
    senderId: {
      username: "Mark",
      mail: "dummyad@gmail.com",
    },
  },
  {
    _id: "2",
    senderId: {
      username: "John",
      mail: "johnad@gmail.com",
    },
  },
];

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "auto",
});

const PendingInvitationList = () => {
  return (
    <MainContainer>
      {DUMMY_INVITATION.map((invitation) => (
        <PendingInvitationListItem
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          mail={invitation.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};
export default PendingInvitationList;
