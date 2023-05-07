import { useState } from "react";
import { IconButton } from "@mui/material";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const ScreenShareButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);
  const handleToggleScreenShare = () => {
    setIsScreenSharingActive(!isScreenSharingActive);
  };
  return (
    <IconButton onClick={handleToggleScreenShare} style={{ color: "white" }}>
      {isScreenSharingActive ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
};
export default ScreenShareButton;
