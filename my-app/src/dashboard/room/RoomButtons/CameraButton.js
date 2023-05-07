import { useState } from "react";
import { IconButton } from "@mui/material";
import { VideocamIcon } from "@mui/material";
import { VideocamOffIcon } from "@mui/material";

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const handleToggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
  };
  return (
    <IconButton>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  );
};
export default CameraButton;
