import React from "react";
import {
  AppBar,
  Box,
  Typography,
  Tooltip,
  IconButton,
  InputBase,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ChatListNavBar: React.FC = () => {
  return (
    <AppBar sx={{ position: "sticky", paddingY: 1 }}>
      <Box px={3} display={"flex"} justifyContent={"space-around"}>
        <Typography variant="h5">Chats</Typography>

        <Tooltip title={"New Chat / Group"}>
          <IconButton sx={{ color: "white" }}>
            <LaunchIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box px={3}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Box>
    </AppBar>
  );
};

export default ChatListNavBar;
