import { useState } from "react";

// material-ui
import {
  Button,
  Step,
  Stepper,
  StepLabel,
  Stack,
  Typography
  
} from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
// project imports

//import PaymentForm from './PaymentForm';
//import Review from './Review';
import MainCard from "ui-component/cards/MainCard";
import AnimateButton from "ui-component/extended/AnimateButton";
import StepOne from "./components/StepOne";

// step options
const steps = ["Submitter & Shipper", "Payment details", "Review your order"];

function getStepContent(
  step,
  handleNext,
  handleBack,
  setErrorIndex,
  shippingData,
  setShippingData,
  paymentData,
  setPaymentData
) {
  switch (step) {
    case 0:
      return (
        <StepOne
          handleNext={handleNext}
          setErrorIndex={setErrorIndex}
          shippingData={shippingData}
          setShippingData={setShippingData}
        ></StepOne>
      );
    case 1:
      break;

    case 2:
      break;
    default:
      throw new Error("Unknown step");
  }
}

// ==============================|| FORMS WIZARD - BASIC ||============================== //

const PriorNotice = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const [errorIndex, setErrorIndex] = useState(null);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setErrorIndex(null);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <MainCard
      title="File Prior Notice with U.S. FDA Quickly and Properly"
      
    >
    <CardHeader subheader="The U.S. Food and Drug Administration (U.S. FDA) requires the filing of Prior Notice for all food, beverage, and dietary supplements shipments entering the United States. Upon receipt of Prior Notice, FDA will issue a confirmation number in the form of a bar code that must accompany most food shipments."></CardHeader>   
      <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
        {steps.map((label, index) => {
          const labelProps = {};

          if (index === errorIndex) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Error
              </Typography>
            );

            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        {activeStep === steps.length ? (
          <>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
            <Stack direction="row" justifyContent="flex-end">
              <AnimateButton>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setShippingData({});
                    setPaymentData({});
                    setActiveStep(0);
                  }}
                  sx={{ my: 3, ml: 1 }}
                >
                  Reset
                </Button>
              </AnimateButton>
            </Stack>
          </>
        ) : (
          <>
            {getStepContent(
              activeStep,
              handleNext,
              handleBack,
              setErrorIndex,
              shippingData,
              setShippingData,
              paymentData,
              setPaymentData
            )}
            {activeStep === steps.length - 1 && (
              <Stack
                direction="row"
                justifyContent={activeStep !== 0 ? "space-between" : "flex-end"}
              >
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ my: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <AnimateButton>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ my: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </AnimateButton>
              </Stack>
            )}
          </>
        )}
      </>
    </MainCard>
  );
};

export default PriorNotice;
