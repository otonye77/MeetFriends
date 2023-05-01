import { styled } from "@mui/system";
import Avatar from "../../shared/components/avatar";
import { Typography } from "@mui/material";

const MainContainer = styled("div")({
  width: "97%",
  display: "flex",
  marginTop: "10px",
});

const AvatarContainer = styled("div")({
  width: "70px",
});

const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const MessageContent = styled("div")({
  color: "#DCDDDE",
});

const SameAuthorMessageText = styled("div")({
  marginLeft: "70px",
});

const SameAuthorMessageContent = styled("div")({
  color: "DCDDDE",
  width: "97%",
});

const Message = ({ content, sameAuthor, username, date, sameDay }) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }
  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar username={username} />
      </AvatarContainer>
      <MessageContainer>
        <Typography
          sx={{
            fontSize: "16px",
            color: "white",
          }}
        >
          {username}
          <span style={{ fontSize: "12px", color: "#72767d" }}></span>
        </Typography>
        <MessageContent>{content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
};
export default Message;
