import { useEffect } from "react";
import { styled } from "@mui/system";
import Sidebar from "./sidebar/sidebar";
import FriendsSidebar from "./friendsSidebar/friendsSidebar";
import Messenger from "./messenger/messenger";
import AppBar from "./appbar/appbar";
import { logout } from "../shared/utils/auth";
import {connect} from"react-redux";
import { getActions } from "../store/actions/authAction";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const DashBoardPage = ({setUserDetails}) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if(!userDetails){
      logout()
    } else {
      setUserDetails(JSON.parse(userDetails))
    }
  }, [])
  return (
    <Wrapper>
        <Sidebar />
        <FriendsSidebar />
        <Messenger />
        <AppBar />
    </Wrapper>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionToProps)(DashBoardPage);
