// import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const BoxWraper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#5865F2",
});

const AuthBox = ({ children }) => {
  return (
    <BoxWraper>
      <Box sx={{
        width: 700,
        height: 400,
        bgcolor: "#36393f",
        boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
        display: "flex",
        flexDirection: "column",
        padding: "25px"
        }}>{children}</Box>
    </BoxWraper>
  );
};

export default AuthBox;
