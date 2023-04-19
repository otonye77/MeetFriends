import { useState } from "react";
import { Box, Tooltip, Typography } from "@mui/material";
import Avatar from "../../../shared/components/avatar";

const PendingInvitationListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleAcceptFriendInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };

  const handleRejecttFriendInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div style={{ width: "100%" }}>
        <Box sx={{
            width: "100%",
            height: "42px",
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
          <Avatar username={username} />
          <Typography sx={{
            marginLeft: "7px",
            fontWeight: 700,
            color: "8e9297",
            flexGrow: 1
          }} variant="subtitle1">{username}</Typography>
        </Box>
      </div>
    </Tooltip>
  );
};
export default PendingInvitationListItem;
