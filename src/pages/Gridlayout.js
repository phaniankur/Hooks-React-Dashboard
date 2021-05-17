import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Grid, Paper} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: '20px',
      paddingLeft: '260px'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      background: theme.palette.success.light,
      fontSize: '12px',
      '&:hover': {
        textDecoration: 'underline',
   }
    },
    
  }));
  
   function Gridlayout() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper className={classes.paper}>
                <h1>Title</h1>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                <h1>Media</h1>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
                <h1>Author/Host</h1>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h1>Track Order</h1></Paper>
          </Grid>
          
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h1>Artwork</h1>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <h1>Subscription</h1>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

export default Gridlayout