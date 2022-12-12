/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const buttonStyle = { margin: "8px 0" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (email === "" || password === "") {
      setError({ status: true, msg: "invalid credentials" });
    }
    // const auth = getAuth();
    console.log(email, password, auth);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/user-not-found") {
          setError({ status: true, msg: "User Account not found" });
        }
        console.log(error);
      });
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
          <h2>Sign In</h2>
        </Grid>

        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            placeholder="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            // required
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {data?.errors?.fieldErrors.phone} */}
          <TextField
            label="Password"
            name="password"
            placeholder="Enter password"
            type="password"
            variant="outlined"
            fullWidth
            // required
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {data?.errors?.fieldErrors.password} */}
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            name="method"
            value="login"
            color="primary"
            variant="contained"
            style={buttonStyle}
            fullWidth
          >
            Sign in
          </Button>
        </form>

        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="/register">Sign Up</Link>
        </Typography>
        <Box>
          {error.status ? <h2 style={{ color: "red" }}>{error.msg}</h2> : null}
        </Box>
        {/* <Box
        sx={{
          marginTop: "8px",
        }}
      >
        {data ? (
          <Box>
            {data.status == 404 ? (
              <Typography
                sx={{
                  color: "error.main",
                }}
              >
                {data.message}
              </Typography>
            ) : null}
          </Box>
        ) : null}
      </Box> */}
      </Paper>
    </Grid>
  );
};
