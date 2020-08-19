import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from  "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';

// This file exports both the List and ListItem components

class BlogPost extends React.Component {


  render() {

  const { classes } = this.props;


  return (
    <div>
      <CssBaseline />
      <main className={classes.main}>
        <Paper className={classes.paper}>
            <Typography variant="h6">
              {this.props.title}
              {this.props.date}
              {this.props.description}
            </Typography>
        </Paper>
      </main>
    </div>
  )
 }
}

export default withStyles(styles)(BlogPost);