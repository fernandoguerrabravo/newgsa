/* eslint-disable no-unused-vars */
//import PropTypes from "prop-types";

// material-ui
import {
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    Stack,
    Typography,
    TextField,
    Tooltip,
    IconButton,
    Divider,
  } from "@mui/material";
  import HelpIcon from "@mui/icons-material/Help";
  
  // project imports
  import AnimateButton from "ui-component/extended/AnimateButton";
  
  // third-party
  import { useFormik } from "formik";
  import * as yup from "yup";
  
 /*const validationSchema = yup.object({
    CompanyName: yup.string().required("Company Name is required"),
    contactName: yup.string().required("Contact Name is required"),
  }); */
  
  // ==============================|| FORM WIZARD - VALIDATION  ||============================== //
  
  const StepTwo = ({
    shippingData,
    setShippingData,
    handleNext,
    setErrorIndex,
  }) => {
    const formik = useFormik({
      initialValues: {
        CompanyName: shippingData.CompanyName,
        contactName: shippingData.contactName,
      },
      //validationSchema,
      onSubmit: (values) => {
        setShippingData({
          CompanyName: values.CompanyName,
          contactName: values.contactName,
        });
        handleNext();
      },
    });
  
    return (
      <>
        <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
          <strong>Consignee Information</strong>
          <Tooltip title="Person who recieves the shipment from the Submitter (FIOR o IOR">
            <IconButton>
              <HelpIcon color="secondary" />
            </IconButton>
          </Tooltip>
        </Typography>
        <form onSubmit={formik.handleSubmit} id="validation-forms">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="CompanyName"
                name="CompanyName"
                label="Company Name *"
                defaultValue={formik.values.CompanyName}
                onChange={formik.handleChange}
                error={
                  formik.touched.CompanyName && Boolean(formik.errors.CompanyName)
                }
                helperText={
                  formik.touched.CompanyName && formik.errors.CompanyName
                }
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="fdaRegister"
                name="fdaRegister"
                label="FDA Register Number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="contactName"
                name="contactName"
                label="Contact Name *"
                defaultValue={formik.values.contactName}
                onChange={formik.handleChange}
                error={
                  formik.touched.contactName && Boolean(formik.errors.contactName)
                }
                helperText={
                  formik.touched.contactName && formik.errors.contactName
                }
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address1"
                name="address1"
                label="Address"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="shipping address-level2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="zip"
                name="zip"
                label="Zip / Postal code"
                fullWidth
                autoComplete="shipping postal-code"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="phone"
                name="phone"
                label="Phone"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                label="email"
                fullWidth
                autoComplete="shipping country"
              />
            </Grid>
            <Grid item xs={12}>
              <Divider />
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use It for Shipper Information"
              />
            </Grid>
            <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
              <strong>Shipper Information</strong>
              <Tooltip title="Person who sends a shipment to the United States or shipment that is passing through the US. In most cases, the submitter and shipper will be the same">
                <IconButton>
                  <HelpIcon color="secondary" />
                </IconButton>
              </Tooltip>
            </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" justifyContent="flex-end">
                <AnimateButton>
                  <Button
                    variant="contained"
                    sx={{ my: 3, ml: 1 }}
                    type="submit"
                    onClick={() => setErrorIndex(0)}
                  >
                    Next
                  </Button>
                </AnimateButton>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </>
    );
  };
  
  /* StepOne.propTypes = {
      shippingData: PropTypes.object,
      setShippingData: PropTypes.func,
      handleNext: PropTypes.func,
      setErrorIndex: PropTypes.func
  }; */
  
  export default StepTwo;
  