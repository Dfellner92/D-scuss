const styles = theme => ({
  align: {
    width: "79%",
    display: "flex",
    justifyContent: "flex-end"
  },
  AppBar: {
    height: "70px"
  },
  inputField: {
    width: "25%",
    padding: "0px !important"

  },
  textField: {
    backgroundColor: "white",
    padding: "0px !important"

  },
  root: {
    flexGrow: 1,
    position: "fixed",
    width: "100%"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  li: {
    zIndex: "100",
  }
});

export default styles;
  