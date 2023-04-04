import ReactFlow, { Controls } from "reactflow";
import "reactflow/dist/style.css";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

// Grid import
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

// Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// Button

import Button from "@mui/material/Button";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GroupWorkIcon from "@mui/icons-material/GroupWork";

import FeedIcon from "@mui/icons-material/Feed";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ApprovalIcon from "@mui/icons-material/Approval";
import MoreIcon from "@mui/icons-material/More";

// Importing Edges and node
import { edges, nodes } from "./data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Flow() {
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }} style={{ marginTop: "70px" }}>
          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} md={10}>
              <Item style={{ backgroundColor: "#265867" }}>
                <ArrowBackIcon
                  style={{ float: "left", color: "white", marginTop: "5px" }}
                />

                <Typography
                  variant="h6"
                  style={{ color: "white", marginLeft: "5px", float: "left" }}
                >
                  Procurement Workflow
                </Typography>

                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="right"
                  alignItems="center"
                >
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "#265867",
                      color: "white",
                      borderColor: "white",
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="outlined"
                    style={{
                      backgroundColor: "#265867",
                      color: "white",
                      borderColor: "white",
                    }}
                  >
                    Save Draft
                  </Button>
                </Stack>
              </Item>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2} md={2}>
              <Card
                style={{
                  height: "500px",
                  width: "90px",
                  backgroundColor: "#265867",
                  color: "white",
                }}
              >
                <CardContent>
                  <FeedIcon style={{ marginTop: "40px", marginLeft: "15px" }} />
                  <Typography style={{ marginLeft: "5px", color: "#9fb5bb" }}>
                    Forms
                  </Typography>
                  <QuestionAnswerIcon
                    style={{ marginTop: "10px", marginLeft: "15px" }}
                  />
                  <Typography style={{ marginRight: "10px", color: "#9fb5bb" }}>
                    Questions
                  </Typography>
                  <GroupWorkIcon
                    style={{ marginTop: "10px", marginLeft: "15px" }}
                  />
                  <Typography style={{ color: "#9fb5bb" }}>Workflow</Typography>
                  <SummarizeIcon
                    style={{ marginTop: "10px", marginLeft: "15px" }}
                  />
                  <Typography style={{ color: "#9fb5bb" }}>Summary</Typography>
                  <ApprovalIcon
                    style={{ marginTop: "10px", marginLeft: "15px" }}
                  />
                  <Typography style={{ color: "#9fb5bb" }}>Approval</Typography>
                  <MoreIcon style={{ marginTop: "10px", marginLeft: "15px" }} />
                  <Typography style={{ marginLeft: "10px", color: "#9fb5bb" }}>
                    More
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={10} md={10}>
              <Item
                style={{
                  height: "500px",
                  width: "950px",

                  fontSize: "16px",
                  backgroundColor: "#003b4c",
                  boxShadow: "none",
                }}
              >
                <ReactFlow nodes={nodes} edges={edges} fitView>
                  <Controls position="bottom-right" />
                </ReactFlow>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default Flow;
