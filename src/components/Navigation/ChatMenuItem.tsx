import React from "react";
import { Menu, MenuItem, Box } from "@mui/material";
import SearchDrawer from "./SearchDrawer";

interface Props {
  open: boolean;
  handleClose: () => void;
  anchorEl: null | HTMLElement;
}

const ChatMenuItem: React.FC<Props> = ({ open, anchorEl, handleClose }) => {
  const [openDrawer, setOpenDrawer] = React.useState<boolean>(false);
  const handleAddUser = () => {
    setOpenDrawer(true);
    handleClose();
  };
  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <Box>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Create Group</MenuItem>
        <MenuItem onClick={handleAddUser}>Search Users</MenuItem>
      </Menu>
      <SearchDrawer open={openDrawer} handleClose={handleCloseDrawer} />
    </Box>
  );
};

export default ChatMenuItem;
