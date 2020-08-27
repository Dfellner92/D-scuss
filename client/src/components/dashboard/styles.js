const styles = theme => ({
    main: {
          width: 'auto',
          display: 'flex', // Fix IE 11 issue.
          marginLeft: theme.spacing.unit * 3,
          marginRight: theme.spacing.unit * 3,
          [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        },
        paper: {
          justifyContent: "center",
          marginTop: theme.spacing.unit * 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        },
        submit: {
          marginTop: theme.spacing.unit * 3,
        }
      });
    
    export default styles;
    