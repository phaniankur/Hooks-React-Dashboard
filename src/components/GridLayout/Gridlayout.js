import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper} from '@material-ui/core'
import Tracker from '../Tracker/Tracker';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '20px',
      paddingLeft: '260px'
    },
    title: {
      padding: theme.spacing(2),
      height: '10rem',
      textAlign: 'center',
      color: theme.palette.text.primary,
      background: 'white',
      borderRadius: '25px',
      fontSize: '12px',
      '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
   }
    },
    media:{
      padding: theme.spacing(2),
      height: '10rem',
      textAlign: 'center',
      color: theme.palette.text.primary,
      background: 'white',
      fontSize: '12px',
      borderRadius: '25px',
      '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
   }
    },
    author:{
      padding: theme.spacing(2),
      height: '10rem',
      textAlign: 'center',
      color: theme.palette.text.primary,
      background: 'white',
      fontSize: '12px',
      borderRadius: '25px',
      '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
   }
    },
    trackOrder:{
      padding: theme.spacing(2),
      height: '15rem',
      width:'80%',
      textAlign: 'center',
      color: theme.palette.text.primary,
      background: 'white',
      fontSize: '12px',
      borderRadius: '25px',
      '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
   }
    },
    artwork:{
      padding: theme.spacing(2),
      height: '10rem',
      textAlign: 'center',
      color: theme.palette.text.primary,
      background: 'white',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      fontSize: '12px',
      borderRadius: '25px',
      '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
   }
    },
    subscription:{
      padding: theme.spacing(2),
      height: '15rem',
      width:'20rem',
      textAlign: 'center',
      color: theme.palette.text.primary,
      background: 'white',
      fontSize: '12px',
      borderRadius: '25px',
      width:'80%',
      '&:hover': {
        boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
   }
    },

    
  }));
  
   function Gridlayout() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.title}>
                <h1>Title</h1>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.media}>
                <h1>Media</h1>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.author}>
                <h1>Author/Host</h1>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.trackOrder}>
              <h1>Track Order</h1>
              <Tracker/>
            </Paper>
          </Grid>
          
          <Grid item xs={6}>
            <Paper className={classes.artwork}>
              <h1>Artwork</h1>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.subscription}>
              <h1>Subscription</h1>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

export default Gridlayout