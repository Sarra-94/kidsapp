import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {connect} from "react-redux"


function ParentForm() {
   
  const [state1, setState1] = React.useState({});
  const [error, setError] = React.useState("");
  const handleChange = e =>
    setState1({ ...state1, [e.target.name]: e.target.value });
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       Information Parent
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Nom"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Prenom"
            fullWidth
            autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="email"
            label="Adresse email"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="addresse"
            label="Adresse"
            fullWidth
            autoComplete="billing address-line2"
               required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="relation"
            label="Relation"
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
     
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="age"
            label="Age"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    handleStateOne: state1=> {
      dispatch({
        type: "GET_STATE_ONE",
        state1: state1
      });
    }
  };
};

export default connect(null,mapDispatchToProps)(ParentForm)