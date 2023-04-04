import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Form
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Component
import Sidebar from "./Sidebar";
import ProductFeedback from "./ProductFeedback";
import UploadDocuments from "./UploadDocuments";
import Question2 from "./Question2";
import Question3 from "./Question3";

const GeneralInformation = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}>
          <Sidebar />
        </Grid>
        <Grid item xs={8} md={8}>
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
                General Information
              </Typography>

              <Card sx={{ minWidth: 275 }} style={{ marginBottom: "10px" }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Question 1
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
                    Please select your sourcing option
                  </Typography>

                  {/* Form */}
                  <FormControl style={{ marginTop: "20px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Choose sourcing
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
                      <MenuItem value={10}>Youtube</MenuItem>
                      <MenuItem value={20}>Teaching</MenuItem>
                      <MenuItem value={30}>Engineer</MenuItem>
                    </Select>
                  </FormControl>
                </CardContent>
              </Card>
              <Question2 />
              <Question3 />
            </CardContent>
          </Card>

          <ProductFeedback />
          <UploadDocuments />
          
        </Grid>
      </Grid>
    </Box>
  );
};
export default GeneralInformation;
