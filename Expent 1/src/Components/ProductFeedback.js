import * as React from "react";



//card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Form
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";





const ProductFeedback = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        backgroundColor: "#f2f5f6",
        marginRight: "20px",
        marginBottom: "10px",
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          Product Feedback
        </Typography>

        <Card sx={{ minWidth: 275 }} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question 4
            </Typography>
            <hr
              style={{
                backgroundColor: "#f2f5f6",
                border: "0 none",
                height: "2px",
                borderRadius: "2px",
              }}
            />
            <Typography variant="subtitle1">
              Will you be sharing Pll with the vendor ?
            </Typography>

            {/* Form */}
           
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="No" />
              
              
            </RadioGroup>
          </CardContent>
        </Card>


        <Card sx={{ minWidth: 275 }} style={{marginBottom:'10px'}}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Question 5
                      </Typography>
                      <hr
                        style={{
                          backgroundColor: "#f2f5f6",
                          border: "0 none",
                          height: "2px",
                          borderRadius: "2px",
                        }}
                      />
                      <Typography variant="subtitle1">
                        What type of Pll will the vendor have access to ?
                      </Typography>

                      {/* Form */}
                      <FormControl style={{ marginTop: "20px" }}>
                        <InputLabel id="demo-simple-select-label">
                          Choose one or more Pll type
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
                          <MenuItem value={10}>Type1 </MenuItem>
                          <MenuItem value={20}>Type2 </MenuItem>
                          <MenuItem value={30}>Type3</MenuItem>
                        </Select>
                      </FormControl>
                    </CardContent>
                  </Card>


        <Card sx={{ minWidth: 275 }} style={{ marginBottom: "10px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Question 4
            </Typography>
            <hr
              style={{
                backgroundColor: "#f2f5f6",
                border: "0 none",
                height: "2px",
                borderRadius: "2px",
              }}
            />
            <Typography variant="subtitle1">
              Will the vendor have access to AWS account ?
            </Typography>

            {/* Form */}
           
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Yes"
              />
              <FormControlLabel value="male" control={<Radio />} label="No" />
              
              
            </RadioGroup>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
export default ProductFeedback;
