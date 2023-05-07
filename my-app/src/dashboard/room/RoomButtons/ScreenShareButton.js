import { useState } from "react";
import { IconButton } from "@mui/material";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";

const ScreenShareButton = () => {
  const [screenSharingEnabled, setScreenSharingEnabled] = useState(true);
  const handleToggleScreenShare = () => {
    setScreenSharingEnabled(!screenSharingEnabled);
  };
  return (
    <IconButton onClick={handleToggleScreenShare} style={{ color: "white" }}>
      {screenSharingEnabled ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};
export default ScreenShareButton;
