import {
  AppBar,
  createStyles,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import React from 'react';
import {
  MdChevronLeft,
  MdChevronRight,
  MdCompareArrows,
  MdInfo,
  MdList,
  MdMenu,
  MdSettings,
} from 'react-icons/md';

const drawerWidth = 240;

function HeaderBar(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MdMenu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Listagem de itens
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(!open)}>
            {theme.direction === 'ltr' ? <MdChevronLeft /> : <MdChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <MdInfo size={24} />
            </ListItemIcon>
            <ListItemText primary="Tutoriais" />
          </ListItem>
          <ListItem button onClick={() => props.getList()}>
            <ListItemIcon>
              <MdList size={24} />
            </ListItemIcon>
            <ListItemText primary="Listas" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MdCompareArrows size={24} />
            </ListItemIcon>
            <ListItemText primary="Integrações" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MdSettings size={24} />
            </ListItemIcon>
            <ListItemText primary="Configurações" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }),
);

export default HeaderBar;
