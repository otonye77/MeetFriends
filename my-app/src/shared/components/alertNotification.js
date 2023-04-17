import { Alert } from "@mui/material";
import { Snackbar } from "@mui/material";

const AlertNotification = () => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open
      onClose={() => {}}
      autoHideDuration={6000}
    >
      <Alert severity="info">Alert Message</Alert>
    </Snackbar>
  );
};

export default AlertNotification;
