import React from "react";
import { Box, TextField, Typography, FormControl, Link } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { dispatch } from "../../redux/store";
import { openAlert } from "../../redux/actions/alertActions";
import { validate } from "email-validator";
import { signUp } from "../../redux/actions/userActions";

interface Props {
  switchPage: () => void;
}

const SignUp: React.FC<Props> = ({ switchPage }) => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName(name.trim());
    setEmail(email.trim());
    setPassword(password.trim());
    setConfirmPassword(confirmPassword.trim());
    if (name.length < 4) {
      dispatch(openAlert("info", "Enter a valid name"));
    }
    if (!validate(email)) {
      dispatch(openAlert("info", "Enter a valid email"));
    }
    if (password.length < 5) {
      dispatch(openAlert("info", "Enter a valid password"));
    }
    if (password !== confirmPassword) {
      dispatch(openAlert("info", "Passwords do not match"));
    }
    signUp(name, email, password);
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
        <TextField
          required
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextField
          required
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <LoadingButton type="submit" size="large" variant="contained">
          Submit
        </LoadingButton>
        <Typography textAlign="center" variant="subtitle1" gutterBottom>
          ALREADY HAVE AN ACOUNT{" "}
          <Link
            component={"button"}
            sx={{ textDecoration: "none" }}
            variant="subtitle1"
            onClick={switchPage}
          >
            Login
          </Link>
        </Typography>
      </FormControl>
    </Box>
  );
};

export default SignUp;
