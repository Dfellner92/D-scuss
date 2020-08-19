import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function ModalForm() {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };




  const submitPost = (event) => {
    event.preventDefault();
    
    const titleVal = document.getElementById('title').value
    const descriptionVal = document.getElementById('description').value

    
    console.log("test from modal",titleVal);
    

};
  

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>
        New Post
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Blog Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            fullWidth
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            fullWidth
            rows={6}
            multiline
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose,submitPost} color="primary">
            Post!
          </Button>
        </DialogActions>
      </Dialog>
    </div>

    
  );


}