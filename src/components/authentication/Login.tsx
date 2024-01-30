import React from "react";
import { Box, FormControl, TextField, Link, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { dispatch } from "../../redux/store";
import { openAlert } from "../../redux/actions/alertActions";
import { validate } from "email-validator";
import { loginUser } from "../../redux/actions/userActions";

interface Props {
  switchPage: () => void;
}

const Login: React.FC<Props> = ({ switchPage }) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail(email.trim());
    setPassword(password.trim());
    if (!validate(email)) {
      dispatch(openAlert("info", "Enter a valid email"));
    }
    if (password.length < 5) {
      dispatch(openAlert("info", "Enter a valid password"));
    }
    loginUser(email, password);
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
        <TextField
          required
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoadingButton variant="contained" type="submit" size="large">
          Login
        </LoadingButton>
        <Typography textAlign="center" variant="subtitle1" gutterBottom>
          DON'T HAVE AN ACCOUNT?{" "}
          <Link
            component={"button"}
            sx={{ textDecoration: "none" }}
            variant="subtitle1"
            onClick={switchPage}
          >
            Register
          </Link>
        </Typography>
      </FormControl>
    </Box>
  );
};

export default Login;
