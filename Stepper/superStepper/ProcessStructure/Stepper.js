import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import StepperMui from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

const CustomStepper = ({activeStepperbox}) => {
  console.log(activeStepperbox);
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 20,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#9999ff',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: '#9999ff',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderRadius: 1,
    },
  }));
  

  
  const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    ...(ownerState.active && {
      backgroundColor: 'blue', 
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    }),
    ...(ownerState.completed && {
      backgroundColor: '#0000ff', 
    }),
  }));
  
  function ColorlibStepIcon(props) {
    const { active, completed, className, icon } = props;
  
    const icons = {
      1: "01",
      2: "02",
      3: "03",
      4: "04",
      5: "05",
    };
  
    return (
      <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
        {icons[icon]}
      </ColorlibStepIconRoot>
    );
  }
  
  ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
    completed: PropTypes.bool,
    icon: PropTypes.number,
  };
  
  const steps = [' 1', ' 2', ' 3', ' 4', ' 5'];

  return (
    <div >
      <Stack sx={{ width: '100%' }} spacing={4} >
        <StepperMui alternativeLabel activeStep={activeStepperbox} connector={<ColorlibConnector/>}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon} icon={index + 1}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </StepperMui>
      </Stack>
    </div>
  );
}

export default CustomStepper;
