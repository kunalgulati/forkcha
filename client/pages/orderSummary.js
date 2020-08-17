import React from 'react'
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Footer from '../components/Footer';
import NavigationBar from '../components/NavigationBar';
// import OrderList from '../views/OrderList';


// Template Based on@ https://dribbble.com/shots/5933374-The-bag/attachments

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  spacing: 10,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  orderDrawerTopText: {
    margin: '5%'
  },
  drawerPaymentText: {
    margin: '5%',
    marginTop: '50%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  listDetailText: {

  },
}));

const useStylesOrderList = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 10,
    width: '100%',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    paddingTop: "5%",
  },
  listRoot: {
    width: '100%',
    maxWidth: '36ch',
    marginLeft: "5%",
    backgroundColor: theme.palette.background.paper,
  },
  listGrid: {
    margin: "2%",
  },
  listItemButton: {
    spacing: theme.spacing(4),
  },
  inline: {
    display: 'inline',
  },
}));

const OrderList =()=> {
  const classes = useStylesOrderList();

  const ListView = () =>{
    // const classes = useStylesOrderList();
    return (
      <React.Fragment>
        <Divider />
        <Grid
          container
          spacing={0}
          direction="column"
          className={classes.listGrid}
        >
          <List
            className={classes.listRoot}>
  
            <ListItem >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar`}
                  src="https://source.unsplash.com/random"
                  title="Image title"
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="subtitle2" > Peeler Fuji Apples Organic 24&quot; bin</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="caption"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Apples of one variety, unless designated as mixed
                      </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem className={classes.listItemButton}>
              <Box>
                <TextField
                  id="standard-number"
                  label="Number of Boxes"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box pl={4}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.backButton}>
                  Remove
                  </Button>
              </Box>
            </ListItem>
          </List>
        </Grid>
        {/* // Second */}
        <Divider />
        <Grid
          container
          spacing={0}
          direction="column"
          className={classes.listGrid}
        >
          <List
            className={classes.listRoot}>
  
            <ListItem >
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar`}
                  src="https://source.unsplash.com/random"
                  title="Image title"
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="subtitle2" > Peeler Fuji Apples Organic 24&ldquo; bin</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="caption"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Apples of one variety, unless designated as mixed
                      </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem className={classes.listItemButton}>
              <Box>
                <TextField
                  id="standard-number"
                  label="Number of Boxes"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
              <Box pl={4}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.backButton}>
                  Remove
                  </Button>
              </Box>
            </ListItem>
          </List>
        </Grid>
  
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Grid className={classes.root}>
        <ListView />
      </Grid>
    </React.Fragment>
  );
}

export default function OrderSummary() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavigationBar position="fixed" className={classes.appBar} userId={"5edab39c6c09ee1e30cae600"}/>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right">
        {/* Order Box Title */}
        <Typography align="center" variant="subtitle1" className={classes.orderDrawerTopText}>Items in your Order</Typography>

        <Divider />

        {/* Payment Text */}
        <Typography align="center" variant="subtitle2" className={classes.drawerPaymentText}>Payment can be made by any bank card</Typography>
        <Divider />
        {/* Subtotal, Tax, Delivery Charges, Total  */}
        <List>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
              {
                <Typography align="left" display="inline">
                  {'Subtotal '}
                  {<Typography align="left" display="inline">{'$234.23'}</Typography>} </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
              {
                <Typography align="left" display="inline">
                  {'Tax '}
                  {<Typography align="left" display="inline">{'$23.43'}</Typography>} </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
              {
                <Typography align="left" display="inline">
                  {'Deliver Charges '}
                  {<Typography align="left" display="inline">{'$100.23'}</Typography>} </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText className={{ primary: classes.listDetailText }} primary=
              {
                <Typography align="left" display="inline">
                  {'Total '}
                  {<Typography align="left" display="inline">{'$357.66'}</Typography>} </Typography>
              }
            />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" disableElevation> Continue</Button>
      </Drawer>

      <OrderList />
      <Divider/>

      {/* <Footer /> */}
    </React.Fragment>

  );
}



