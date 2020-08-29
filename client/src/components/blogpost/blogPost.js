import React from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from '@material-ui/core/CssBaseline';
import DeleteIcon from '@material-ui/icons/Delete';
import EditModal from "../editmodal/editModal";
import IconButton from '@material-ui/core/IconButton';

function BlogPost(props) {

  const { classes } = props;

  const oldDate = props.date
  let writtenMonth = "";
  let convertedHour = "";
  const newDate = oldDate.slice(0, 10);
  const newTime = oldDate.slice(11, 19)
  const month = newDate.slice(5, 7);
  const year = newDate.slice(0, 4);
  const day = newDate.slice(8, 10);
  const hour = newTime.slice(0, 2);

  if (hour === "04" || hour === "17") {
    convertedHour = "1"
  } else if (hour === "05" || hour === "18") {
    convertedHour = "2"
  } else if (hour === "06" || hour === "19") {
    convertedHour = "3"
  } else if (hour === "07" || hour === "20") {
    convertedHour = "4"
  } else if (hour === "08" || hour === "21") {
    convertedHour = "5"
  } else if (hour === "09" || hour === "22") {
    convertedHour = "6"
  } else if (hour === "10" || hour === "23") {
    convertedHour = "7"
  } else if (hour === "11") {
    convertedHour = "8"
  } else if (hour === "12" || "00") {
    convertedHour = "9"
  } else if (hour === "13" || "01") {
    convertedHour = "10"
  } else if (hour === "14" || "02") {
    convertedHour = "11"
  } else if (hour === "15" || "03") {
    convertedHour = "12"
  } else {
    convertedHour = ""
  }

  let minute = newTime.slice(3, 5);
  let amPm = "";
  let finalTime = convertedHour + ":" + minute + " " + amPm;
  console.log(newTime);

  if (hour === "15" || hour === "14" || hour === "13" || hour === "12" || hour === "04" || hour === "05" || hour === "06" || hour === "07" || hour === "08" || hour === "09" || hour === "10" || hour === "11") {
    amPm = "am"
  } else if (hour === "16" || hour === "17" || hour === "18" || hour === "19" || hour === "20" || hour === "21" || hour === "22" || hour === "23" || hour === "00" || hour === "01" || hour === "02" || hour === "03")  {
    amPm = "pm"
  } else {
    amPm = ""
  }

  if (month === "01") {
    writtenMonth = "January"
  } else if (month === "02") {
    writtenMonth = "February"
  } else if (month === "03") {
    writtenMonth = "March"
  } else if (month === "04") {
    writtenMonth = "April"
  } else if (month === "05") {
    writtenMonth = "May"
  } else if (month === "06") {
    writtenMonth = "June"
  } else if (month === "07") {
    writtenMonth = "July"
  } else if (month === "08") {
    writtenMonth = "August"
  } else if (month === "09") {
    writtenMonth = "September"
  } else if (month === "10") {
    writtenMonth = "October"
  } else if (month === "11") {
    writtenMonth = "November"
  } else if (month === "12") {
    writtenMonth = "December"
  } else {
    writtenMonth = ""
  }

  //const edited = "";

  const finalDate = writtenMonth + " " + day + ", " + year + ", " + finalTime + " " + amPm;

  return (
    <div>
      <CssBaseline />
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.title}>
            {props.title}
          </Typography>
          <Typography variant="subtitle2" className={classes.date}>
            {finalDate}
          </Typography>
          <br/>
          <Typography variant="subtitle1">
            {props.description}
          </Typography>
          <div>
            <EditModal 
            blogId={props.blogId}
            title={props.title}
            description={props.description}
            emailId={props.emailId}
            getSavedBlogPosts={props.getSavedBlogPosts}
            />

            <IconButton
              aria-label="delete"
              color="primary"
              onClick={() => props.handleDelete(props.blogId)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </Paper>
      </main>
    </div>
    )
  
}

export default withStyles(styles)(BlogPost);


