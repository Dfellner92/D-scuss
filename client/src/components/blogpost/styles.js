const styles = theme => ({
    main: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(theme.spacing.unit * 3 * 2)]: {
          width: '50%',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },

    button: {
        '& > *': {
            margin: theme.spacing(1),
          }
    },

    date: {
        color: '#787878'
    },

    title: {
        color: "#3F51B5"
    }

});

export default styles;