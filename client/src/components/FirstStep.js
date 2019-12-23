import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";

import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import Success from "./Success";
// Step titles
const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));
// Destructure props
const FirstStep = ({
  handleNext,
  handleChange,
  values: { name, lastname, email, relation,password},
  filedError,
  isError
}) => {
  // Check if all values are not empty
    const classes = useStyles();
  const isEmpty =
    name.length > 0 &&
    lastname.length > 0 &&
    relation.length > 0 &&
    email.length > 0;
  return (
      
    <Fragment>
        <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="name"
            placeholder="Your first name"
            defaultValue={name}
            onChange={handleChange("name")}
            margin="normal"
            error={filedError.name !== ""}
            helperText={
              filedError.name !== "" ? `${filedError.name}` : ""
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastname"
            placeholder="Your last name"
            defaultValue={lastname}
            onChange={handleChange("lastname")}
            margin="normal"
            error={filedError.lastname !== ""}
            helperText={
              filedError.lastname !== "" ? `${filedError.lastname}` : ""
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            defaultValue={email}
            onChange={handleChange("email")}
            margin="normal"
            error={filedError.email !== ""}
            helperText={filedError.email !== "" ? `${filedError.email}` : ""}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            placeholder="Your password"
            type="password"
            defaultValue={password}
            onChange={handleChange("password")}
            margin="normal"
            error={filedError.password !== ""}
            helperText={filedError.password !== "" ? `${filedError.password}` : ""}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel htmlFor="relation">Relation</InputLabel>
            <Select value={relation} onChange={handleChange("relation")}>
              <MenuItem value={"Mom"}>Mom</MenuItem>
              <MenuItem value={"Dad"}>Dad</MenuItem>
              <MenuItem value={"GrandParents"}>GrandParents</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          disabled={!isEmpty || isError}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
     </Paper>
      </main>
    </Fragment>
  );
};
export default FirstStep;