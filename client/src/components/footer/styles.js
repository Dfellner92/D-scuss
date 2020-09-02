const styles = theme => ({
  align: {
    margin: "center"
  },
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  content: {
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 0.5}px ${theme.spacing.unit * 0.5}px ${theme.spacing.unit * 0.5}px`,
  },
  copywrite: {
    margin: "center",
    fontSize: "9px",
    justifyContent: "center",
    display: 'inline'


  }
});

export default styles;