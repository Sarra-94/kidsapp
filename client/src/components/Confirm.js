import React, { Fragment } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

// Destructure props
const Confirm = ({
  history,
  handleNext,
  handleBack,
  values: { name, lastname, email, relation, age, phone, adresse,password }
}) => {
  return (
    <Fragment>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="First Name" secondary={name} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Last Name" secondary={lastname} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="Email Address" secondary={email} />
        </ListItem>
          <ListItem>
              <Divider />
          <ListItemText primary="Password" secondary={password} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="relation" secondary={relation} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="age of birth" secondary={age} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="adresse" secondary={adresse} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="phone"
            secondary={phone.length > 0 ? phone : "Not Provided"}
          />
        </ListItem>
      </List>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button variant="contained" color="default" onClick={handleBack}>
          Back
        </Button>

        <Button
          style={{ marginLeft: 20 }}
          variant="contained"
          color="secondary"
          onClick={async () => {
             axios.post("/user/register",  name, lastname, email, relation, age, phone, adresse )
          .then(  history.push("/signin"))
          .catch(err => console.log(err));
          }}
        >
          Confirm & Continue
        </Button>
      </div>
    </Fragment>
  );
};
export default withRouter(Confirm);
