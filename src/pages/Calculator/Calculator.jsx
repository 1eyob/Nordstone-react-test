import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

const Calculator = () => {
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
      const total = num1 + num2;
      setResult(total);
    } else if (operator === "subtraction") {
      const sub = num1 - num2;
      setResult(sub);
    } else if (operator === "multiplication") {
      const multiply = num1 * num2;
      setResult(multiply);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(parseInt(e.target.value))}
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(parseInt(e.target.value))}
          />
        </Box>
        <FormControl
          sx={{
            width: "105px",
            marginTop: "10px",
          }}
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
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
          }}
          type="submit"
          name="method"
          value="submit"
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
        <TextField
          sx={{
            marginTop: "10px",
            marginLeft: "10px",
          }}
          value={result}
        ></TextField>
      </form>
    </Box>
  );
};

export default Calculator;
