import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
  createStyles,
  makeStyles,
} from "@material-ui/core";

import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UserContext } from './UserContext'

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default function SideNav() {
  const [user, setUser] = useContext(UserContext)
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar}>
        <Typography variant="h6">SideNav</Typography>
      </div>
      <Divider />
      <List>
        <ListSubheader>Pages</ListSubheader>
        {Boolean(user.username) && (
          <ListItem button component={Link} to="/user">
            <ListItemText primary="User (React)" />
          </ListItem>
        )}
        {!Boolean(user.username) && (
          <ListItem button component={Link} to="/">
            <ListItemText primary="Login (Svelte)" />
          </ListItem>
        )}
      </List>
      {Boolean(user.username) && (
        <List>
          <ListSubheader>Actions</ListSubheader>
          <ListItem button component={Link} onClick={() => setUser({})} to="/">
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      )}
    </Drawer>
  );
}
