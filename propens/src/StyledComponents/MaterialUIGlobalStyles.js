import {makeStyles, styled} from '@material-ui/core/styles';
import {Button} from '@material-ui/core';


export const useStyles = makeStyles({
    
    root : {
        margin: 0,
        padding: 0
    },
    topNavigation: {
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'whitesmoke',
        fontFamily: `"Kulim Park", sans-serif`,
    },
    bottomNavigation: {
        position: 'fixed',
        display: 'flex',
        margin: '0 auto',
        paddingTop: '10px',
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'flex-start',
        justifyContent: 'center',
    
    },
    topLinksContainer: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    topNavigationLink: {
        padding: '20px',
        color: 'white',
        textDecoration: 'none'
    }
});

export const formStyles = makeStyles({
    formContainer: {
        width: '60%',
        margin: '0 auto',
        padding: '30px',
        border: '1px solid blue',
        display: 'flex',
        flexDirection: 'row wrap',
        justifyContent: 'center',
        },
    registrationForm: {
        width: '100%',
        margin: '20px 0',
    },
    formLabel: {
        color: 'red',
    },
    registrationFormInput: {
        padding: '10px 0',
    },
    inputDiv:{
        margin: '30px 0',
        padding: '20px 0',
        border: '1px solid blue',
        '& input': {
            padding: '5px 0',
        }
    }, 
})

export const SubmitBtn = styled(Button)({
    color: 'green',
    backgroundColor: 'blue'
});