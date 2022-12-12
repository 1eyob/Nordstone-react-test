import React from "react";
import { useState } from "react";
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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const Calc = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!num1 || !num2) {
      return;
    }
    if (operator === "addition") {
      const total = num1 - -num2;
      setResult(total);
    } else if (operator === "subtraction") {
      const sub = num1 - num2;
      setResult(sub);
    } else if (operator === "multiplication") {
      const multiply = num1 * num2;
      setResult(multiply);
    }
    console.log(result);
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid>
          <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
          <h2>Calculator</h2>
        </Grid>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Number1"
            placeholder="0"
            name="number1"
            type="number"
            variant="outlined"
            fullWidth
            // required
            onChange={(e) => setNum1(e.target.value)}
          />
          {/* {data?.errors?.fieldErrors.phone} */}
          <TextField
            label="Number2"
            placeholder="0"
            name="number2"
            type="number"
            variant="outlined"
            fullWidth
            // required
            onChange={(e) => setNum2(e.target.value)}
            sx={{
              marginTop: "10px",
            }}
          />
          <FormControl
            sx={{
              marginTop: "10px",
            }}
            fullWidth
          >
            <InputLabel id="demo-simple-select-label">Operator</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={operator}
              label="Operator"
              onChange={(e) => setOperator(e.target.value)}
            >
              <MenuItem value={"addition"}>Add</MenuItem>
              <MenuItem value={"subtraction"}>Subtract</MenuItem>
              <MenuItem value={"multiplication"}>Multiply</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            name="method"
            value="login"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
          >
            Submit
          </Button>
          <TextField
            sx={{
              marginTop: "10px",
              marginLeft: "10px",
            }}
            label="Result"
            placeholder="0"
            type="text"
            value={result}
            inputProps={{ readOnly: true }}
          ></TextField>
        </form>
      </Paper>
    </Grid>
  );
};
