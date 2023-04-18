import { styled } from "@mui/system";
import Sidebar from "./sidebar/sidebar";
import FriendsSidebar from "./friendsSidebar/friendsSidebar";
import Messenger from "./messenger/messenger";
import AppBar from "./appbar/appbar";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const DashBoardPage = () => {
  return (
    <Wrapper>
        <Sidebar />
        <FriendsSidebar />
        <Messenger />
        <AppBar />
    </Wrapper>
  );
};

export default DashBoardPage;
