import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

const Sidebar = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                border: "1px solid black",
                color:'black'
              }}
            >
              <ListItemText primary="General Information " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              style={{
                backgroundColor: "#f2f5f6",
                borderRadius: "10px",
                marginTop: "5px",
              }}
            >
              <ListItemText primary="Security & Privacy" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              style={{
                backgroundColor: "#f2f5f6",
                borderRadius: "10px",
                marginTop: "5px",
              }}
            >
              <ListItemText primary="Upload Documents" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};
export default Sidebar;
