import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import DropdownButton from "./DropdownButton";
import SidebarTopSection from "./SidebarTopSection";
// import NewProjectPage from "./NewProjectPage";
import SettingsComponent from "./SettingsComponent";
import SignUpComponent from "./SignUpComponent";
import SignInComponent from "./SignInComponent";
import UpgradeComponent from "./UpgradeComponent";
import ProjectView from "./ProjectView";
// import PDFUploadComponent from "./PDFUploadComponent";

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: "20%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "20%",
          boxSizing: "border-box",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      <SidebarTopSection />
      <DropdownButton />
    </Drawer>
  );
}

export default Sidebar;
