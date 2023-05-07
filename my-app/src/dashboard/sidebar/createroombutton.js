import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateRoomButton = () => {
    const createRoomHandler = () => {

    }
  return <div>
     <Button
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#5865F2",
      }}
    >
      <AddIcon />
    </Button>
  </div>;
};
export default CreateRoomButton;
