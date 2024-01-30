import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useSelector, useDispatch } from "react-redux";
import { closeAlert } from "../redux/actions/alertActions";
import { RootReducer } from "../redux/store";

const AlertComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { open, type, message } = useSelector(
    (state: RootReducer) => state.alert
  );
  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") return;
    dispatch(closeAlert());
  };
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert severity={type} onClose={handleClose}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertComponent;
