import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

// Icons
import GpsFixedOutlinedIcon from "@mui/icons-material/GpsFixedOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";

export const edges = [
    { id: "1-2", source: "1", target: "2", type: "straight" },
    { id: "2-3", source: "2", target: "3", type: "straight" },
    { id: "3-4", source: "3", target: "4", type: "straight" },
    { id: "4-5", source: "4", target: "5", type: "straight" },
    { id: "4-6", source: "4", target: "6", type: "step" },
    { id: "4-7", source: "4", target: "7", type: "step" },
  ];

export const nodes = [
    {
      id: "1",
      position: { x: 500, y: 0 },
      data: {
        label: (
          <Stack direction="row" spacing={2}>
            <HomeOutlinedIcon style={{ fontSize: "20px", marginTop: "2px" }} />
            <Typography>Home</Typography>
            <GpsFixedOutlinedIcon
              style={{ fontSize: "20px", marginTop: "2px", color: "#265867" }}
            />
          </Stack>
        ),
      },
      type: "input",
      style: { width: "150px", borderRadius: "20px", backgroundColor: "white" },
    },
    {
      id: "2",
      position: { x: 425, y: 100 },
      data: {
        label: (
          <>
            <Stack direction="row" spacing={2}>
              <ClassOutlinedIcon
                style={{ fontSize: "20px", color: "#17bebb", marginTop: "5px" }}
              />
              <Typography variant="subtitle1">Requirement Selection</Typography>
            </Stack>
            <Typography
              variant="body2"
              style={{ float: "left", color: "#9fb5bb", marginLeft: "35px" }}
            >
              Permission, form type and +1{" "}
            </Typography>
          </>
        ),
      },
      style: {
        width: "300px",
        borderRadius: "20px",
        backgroundColor: "#265867",
        color: "white",
      },
    },
    {
      id: "3",
      position: { x: 425, y: 200 },
      data: {
        label: (
          <>
            <Stack direction="row" spacing={2}>
              <QuestionMarkOutlinedIcon
                style={{ fontSize: "20px", color: "#17bebb", marginTop: "5px" }}
              />
              <Typography variant="subtitle1">Questionnaire</Typography>
            </Stack>
            <Typography
              variant="body2"
              style={{ float: "left", color: "#9fb5bb", marginLeft: "35px" }}
            >
              Permission, form type and +1
            </Typography>
          </>
        ),
      },
      style: {
        width: "300px",
        borderRadius: "20px",
        backgroundColor: "#265867",
        color: "white",
      },
    },
    {
      id: "4",
      position: { x: 500, y: 300 },
      data: {
        label: <Typography variant="subtitle1">Add Action</Typography>,
      },
      style: { width: "150px", borderRadius: "20px", backgroundColor: "#17bebb" },
    },
  
    {
      id: "5",
      position: { x: 425, y: 400 },
      data: {
        label: (
          <>
            <Stack direction="row" spacing={2}>
              <ClassOutlinedIcon
                style={{ fontSize: "20px", color: "#17bebb", marginTop: "5px" }}
              />
              <Typography variant="subtitle1">Collaborator Feedback_1</Typography>
            </Stack>
            <Typography
              variant="body2"
              style={{ float: "left", color: "#9fb5bb", marginLeft: "35px" }}
            >
              Permission, form type and +1
            </Typography>
          </>
        ),
      },
      style: {
        width: "300px",
        borderRadius: "20px",
        backgroundColor: "#265867",
        color: "white",
      },
    },
    {
      id: "6",
      position: { x: 100, y: 400 },
      data: {
        label: (
          <>
            <Stack direction="row" spacing={2}>
              <ClassOutlinedIcon
                style={{ fontSize: "20px", color: "#17bebb", marginTop: "5px" }}
              />
              <Typography variant="subtitle1">Collaborator Feedback_2</Typography>
            </Stack>
            <Typography
              variant="body2"
              style={{ float: "left", color: "#9fb5bb", marginLeft: "35px" }}
            >
              Permission, form type and +1
            </Typography>
          </>
        ),
      },
      style: {
        width: "300px",
        borderRadius: "20px",
        backgroundColor: "#265867",
        color: "white",
      },
    },
    {
      id: "7",
      position: { x: 750, y: 400 },
      data: {
        label: (
          <>
            <Stack direction="row" spacing={2}>
              <ClassOutlinedIcon
                style={{ fontSize: "20px", color: "#17bebb", marginTop: "5px" }}
              />
              <Typography variant="subtitle1">Collaborator Feedback_3</Typography>
            </Stack>
            <Typography
              variant="body2"
              style={{ float: "left", color: "#9fb5bb", marginLeft: "35px" }}
            >
              Permission, form type and +1
            </Typography>
          </>
        ),
      },
      style: {
        width: "300px",
        borderRadius: "20px",
        backgroundColor: "#265867",
        color: "white",
      },
    },
  ];