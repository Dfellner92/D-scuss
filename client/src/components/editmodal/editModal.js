import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import API from '../../utils/API';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';


export default function EditModalForm(props) {
  
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const classes  = props;

  const handleClickOpen = (id) => {
    setOpen(true);
    setTitle(props.title);
    setDescription(props.description);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateSubmit =  async (event, blogId, emailId) => {
    event.preventDefault();
    const email = localStorage.getItem("id")
    API.updatePost(emailId, blogId, email, {
      title: title,
      description: description,
      _id: blogId
    }).then(res => {
      setTitle("")
      setDescription("")
      setOpen(false)
    }).then(res =>
    (classes.getSavedBlogPosts(email)));
    await handleClose();
 };

  return (
    <React.Fragment>
      <IconButton aria-label="edit" color="primary" onClick={() => handleClickOpen(props.blogId)} >
            <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit D'scussion</DialogTitle>
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
          <Button onClick={(e) => updateSubmit(e, props.blogId, props.emailId)} color="primary">
            Update!
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

  );


}