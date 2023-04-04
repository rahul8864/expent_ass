import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Avatar
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import AvatarGroup from "@mui/material/AvatarGroup";

// Icons
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Grid
import Grid from "@mui/material/Grid";
import GeneralInformation from "../GeneralInformation";



const Projects = () => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        marginTop: "65px",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} style={{ marginTop: "20px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                Projects > ... > Project information
              </Typography>
              <Typography variant="h6" component="div">
                Request for software
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <CalendarTodayIcon style={{ fontSize: "16px" }} /> 12 October -
                26 October .
                <IconButton sx={{ p: 0 }} style={{ marginLeft: "20px" }}>
                  <AvatarGroup max={4}>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "16px",
                        backgroundColor: "#fcaf58",
                      }}
                    >
                      A
                    </Avatar>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "16px",
                        backgroundColor: "#907dce",
                      }}
                    >
                      B
                    </Avatar>
                    <Avatar
                      style={{
                        width: "30px",
                        height: "30px",
                        fontSize: "16px",
                        backgroundColor: "#92ab59",
                      }}
                    >
                      C
                    </Avatar>
                  </AvatarGroup>
                </IconButton>
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              <Grid item xs={6} md={6} style={{ marginTop: "150px" }}>
                <CardContent>
                  <Typography variant="subtitle1" component="div">
                    Pre-Evaluation Feedback
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    12 October 2022
                  </Typography>
                  <hr
                    style={{
                      backgroundColor: "#64d4d1",
                      color: "#64d4d1",
                      height: "3px",
                      borderRadius: "5px",
                      border: "0 none",
                    }}
                  />
                </CardContent>
              </Grid>
              <Grid item xs={6} md={6} style={{ marginTop: "150px" }}>
                <CardContent>
                  <Typography variant="subtitle1" component="div">
                    Intake Form
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    16 October 2022
                  </Typography>
                  <hr
                    style={{
                      backgroundColor: "#64d4d1",
                      color: "#64d4d1",
                      height: "3px",
                      borderRadius: "5px",
                      width: "190px",
                      border: "0 none",
                    }}
                  />
                </CardContent>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3} style={{ marginTop: "20px" }}>
            <CardContent>
              <Button
                variant="outlined"
                style={{ color: "black", borderColor: "black" }}
              >
                Project Preview <KeyboardArrowRightIcon />
              </Button>
            </CardContent>
          </Grid>
        </Grid>
        <hr
          style={{
            backgroundColor: "#f2f5f6",
            height: "3px",
            border: "0 none",
          }}
        />
        <GeneralInformation/>
      </Box>
    </Card>
  );
};
export default Projects;
