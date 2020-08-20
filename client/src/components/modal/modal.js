import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../../utils/API';


export default function ModalForm(props) {
  
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  


  const submitPost = (event) => {
    event.preventDefault();
   
    const id = localStorage.getItem("id")
    console.log(id)
    API.saveBlogPost({
      title: title,
      description: description
    }, id).then(res => {
      setTitle("")
      setDescription("")
      setOpen(false)
    })
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
            value={title}
            onChange={e => setTitle(e.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
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