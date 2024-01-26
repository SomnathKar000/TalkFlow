import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const AlertComponent: React.FC = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose}>This is an alert</Alert>
      </Snackbar>
    </div>
  );
};

export default AlertComponent;
