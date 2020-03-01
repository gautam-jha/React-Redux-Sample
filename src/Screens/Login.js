import React, {useState,useEffect} from 'react';
// import { browserHistory as history } from 'react-router'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login(props) {


    const [email,setEmail] = useState(null);

    const [password,setPassword] = useState(null);

    const [errors,setErrors] = useState([]); 

    useEffect(() => {
        if(localStorage.getItem('login') == 'success'){
            props.history.push('/dashboard')
        } 
    }, [localStorage])

  const  handleValidation = () => {
   
    let errors = {};
    let formIsValid = true;

   
    //Email
    if(!email){
       formIsValid = false;
       errors["email"] = "Cannot be empty";
    }

    if(typeof email !== "undefined"){
       let lastAtPos = email.lastIndexOf('@');
       let lastDotPos = email.lastIndexOf('.');

       if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
   }
    //Password
    if(!password){
        formIsValid = false;
        errors["password"] = "Cannot be empty";
     }
   

   setErrors(errors);
   return formIsValid;
}  
  const processLogin = (e) => {
    e.preventDefault();

    if(handleValidation()){
        if(email !== 'hruday@gmail.com' && password !== 'hruday123'){
            let errors = {};
            errors['email'] = 'wrong credentials';
            errors['password'] = 'wrong credentials';

            setErrors(errors);
        }else{
            localStorage.setItem('login', 'success');
            alert("Login Sucessful Redirecting you to Dashboard")
            props.history.push('/dashboard');
        }
        
    }else{
        //alert("Errors")
    }

        
  }
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={(e)=>processLogin(e)} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onKeyUp={(event)=>setEmail(event.target.value)}
          />
          <span style={{color: "red"}}>{errors && errors["email"]}</span>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onKeyUp={(event)=>setPassword(event.target.value)}
          />
          <span style={{color: "red"}}>{errors && errors["password"]}</span>
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // onClick={}
          >
            Sign In
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}