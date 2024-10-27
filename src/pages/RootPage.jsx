import {
  Accordion,
  AppBar,
  Avatar,
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SegmentOutlinedIcon from '@mui/icons-material/SegmentOutlined';

const drawerWidth = 255;

const LIST_ITEM_MAPPING = {
  Home: {
    link: "/button",
    icon: <HomeOutlinedIcon />,
  },
  Members: {
    link: "/button",
    icon: <PeopleAltOutlinedIcon />,
  },
};

export function RootPage() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              src="https://d1qbqkkh49kht1.cloudfront.net/9487f5e66737e0d3dada5772b160ae7e.png"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <IconButton>
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <Avatar variant="rounded">H</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {["Home", "Members"].map((text, index) => (
            <ListItem key={text}>
              <ListItemButton
                onClick={() => navigate(LIST_ITEM_MAPPING[text]?.link)}
              >
                <ListItemIcon>{LIST_ITEM_MAPPING[text]?.icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem key="Program Settings">
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <VideogameAssetOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Program Settings</ListItemText>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List sx={{pl: 4}}>
              {["Activities", "Rewards", "Tiers", "Points Expiration"].map(
                (text, index) => {
                  return (
                    <ListItem>
                      <ListItemButton>
                        <ListItemText primary={text} />
                      </ListItemButton>
                    </ListItem>
                  );
                }
              )}
            </List>
          </Collapse>
          <ListItem>
            <ListItemButton>
              <ListItemIcon><SegmentOutlinedIcon /></ListItemIcon>
              <ListItemText>Analytics</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: "1", p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
