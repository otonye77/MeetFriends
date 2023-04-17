import { Typography } from "@mui/material";
import { styled } from "@mui/material";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
});

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      sx={{ color: "#727674" }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
