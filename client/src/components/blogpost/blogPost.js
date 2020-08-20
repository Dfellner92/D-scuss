import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from  "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

// This file exports both the List and ListItem components



class BlogPost extends React.Component {
  

  render() {
    
  const { classes } = this.props;


  return (
    <div>
      <CssBaseline />
      <main className={classes.main}>
        <Paper className={classes.paper}>
            <Typography variant="h4">
              {this.props.title}
            </Typography>
            <Typography variant="subtitle2">
              {this.props.date}
            </Typography>
            <Typography variant="subtitle1">
              {this.props.description}
            </Typography>
            <div>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<EditIcon />}>
                Edit
            </Button>

            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}>
                Delete
            </Button>
            </div>
        </Paper>
      </main>
    </div>
  )
 }
}

export default withStyles(styles)(BlogPost);