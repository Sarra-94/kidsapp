import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// Destructure props
const SecondStep = ({
  handleNext,
  handleBack,
  handleChange,
  values: { age, phone, adresse },
  filedError,
  isError
}) => {
  // Check if all values are not empty
  const isEmpty = age.length > 0 && adresse.length > 0;
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="adresse"
            name="adresse"
            placeholder="Enter your adresse"
            defaultValue={adresse}
            onChange={handleChange("adresse")}
            margin="normal"
            error={filedError.adresse !== ""}
            helperText={filedError.adresse !== "" ? `${filedError.adresse}` : ""}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="age of birth"
            name="age"
            type="date"
            defaultValue={age}
            onChange={handleChange("age")}
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="i.e: xxx-xxx-xxxx"
            defaultValue={phone}
            onChange={handleChange("phone")}
            margin="normal"
            error={filedError.phone !== ""}
            helperText={filedError.phone !== "" ? `${filedError.phone}` : ""}
          />
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 20 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={!isEmpty || isError}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </Fragment>
  );
};
export default SecondStep;