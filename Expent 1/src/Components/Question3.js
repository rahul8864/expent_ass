import React from "react";

//card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Form
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Question3 = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card sx={{ minWidth: 275 }} style={{ marginBottom: "10px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Question 3
        </Typography>
        <hr
          style={{
            backgroundColor: "#f2f5f6",
            border: "0 none",
            height: "2px",
            borderRadius: "2px",
          }}
        />
        <Typography variant="subtitle1">Provide an expected spend</Typography>

        {/* Form */}
        <FormControl style={{ marginTop: "20px" }}>
          <InputLabel id="demo-simple-select-label">
            Choose expense range
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            style={{
              width: "250px",
              height: "40px",
              marginTop: "8px",
              backgroundColor: "#f2f5f6",
            }}
          >
            <MenuItem value={10}>10000</MenuItem>
            <MenuItem value={20}>20000</MenuItem>
            <MenuItem value={30}>30000</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default Question3;
