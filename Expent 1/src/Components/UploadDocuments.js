import React from "react";

//card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const UploadDocuments = () => {
  return (
    <>
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
            Upload Documents
          </Typography>

          <Card sx={{ minWidth: 275 }} style={{ marginBottom: "10px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Question 7
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
                Please attach any relevant contract or document
              </Typography>

              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />

                <FolderOpenIcon />
              </IconButton>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="subtitle1">
                  Drag & Drop File or{" "}
                </Typography>
                <Typography variant="subtitle1" style={{ color: "#17bebb" }}>
                  Browse{" "}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275 }} style={{ marginBottom: "10px" }}>
            <CardContent>
              <Stack spacing={2} direction="row">
                <Button
                  variant="outlined"
                  style={{ borderColor: "black", color: "black" }}
                >
                  save & continue later
                </Button>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#17bebb", color: "black" }}
                >
                  next
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </>
  );
};

export default UploadDocuments;
