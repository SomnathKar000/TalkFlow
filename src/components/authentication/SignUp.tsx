import React from "react";
import { Box, TextField, Typography, FormControl, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface Props {
  switchPage: () => void;
}

const SignUp: React.FC<Props> = ({ switchPage }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Box>
      <FormControl
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          gap: 3,
          mt: 2,
          p: 4,
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
        }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Typography align="center" variant="h3">
          SignUp
        </Typography>
        <TextField required label="Name" />
        <TextField required type="email" label="Email" />
        <TextField required label="Password" />
        <TextField required label="Confirm Password" type="password" />
        <LoadingButton type="submit" size="large" variant="contained">
          Submit
        </LoadingButton>
        <Typography textAlign="center" variant="subtitle1" gutterBottom>
          {" "}
          ALREADY HAVE AN ACOUNT{" "}
          <Link component={"button"} variant="subtitle1" onClick={switchPage}>
            Login
          </Link>
        </Typography>
      </FormControl>
    </Box>
  );
};

export default SignUp;
