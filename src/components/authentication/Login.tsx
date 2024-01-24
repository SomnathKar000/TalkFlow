import React from "react";
import { Box, FormControl, TextField, Link, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
interface Props {
  switchPage: () => void;
}

const Login: React.FC<Props> = ({ switchPage }) => {
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
          transform: "translate(-50%, -50%)",
          width: 400,
          gap: 4,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
        component={"form"}
        onSubmit={handleSubmit}
      >
        <Typography align="center" variant="h3">
          Login
        </Typography>
        <TextField required type="email" label="Email" />
        <TextField required label="Password" />
        <LoadingButton variant="contained" type="submit" size="large">
          Login
        </LoadingButton>
        <Typography textAlign="center" variant="subtitle1" gutterBottom>
          DON'T HAVE AN ACCOUNT?{" "}
          <Link component={"button"} variant="subtitle1" onClick={switchPage}>
            Register
          </Link>
        </Typography>
      </FormControl>
    </Box>
  );
};

export default Login;
