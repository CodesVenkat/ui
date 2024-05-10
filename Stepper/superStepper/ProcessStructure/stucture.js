import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stepper from './Stepper';
import $ from 'jquery'; // Import jQuery

const ProcessStructure = () => {
    const structure = [
        {
            icon: "/images/Applicationphase.png",
            name: "Application phase",
            description: "Receiving applications from innovators and startups"
        },
        {
            icon: "/images/screening.png",
            name: "Screening",
            description: "Applications undergo screening based on predefined criteria"
        },
        {
            icon: "/images/demodaypreparation.png",
            name: "Demo day Preparation",
            description: "Shortlisted applicants are notified and prepared for the live pitch presentation"
        },
        {
            icon: "/images/Demoday.png",
            name: "Demo Day",
            description: "Shortlisted applicants pitch their solutions to key stakeholders"
        },
        {
            icon: "/images/winnerAnnoncement.png",
            name: "Winner Announcement",
            description: "The judging panel deliberates the winners, pave the way for potential support and collaboration."
        },
    ];

    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        // Start the automatic stepper
        const interval = setInterval(() => {
            const nextStep = (activeStep + 1) % structure.length;
            setActiveStep(nextStep);
        }, 2500); 

        return () => clearInterval(interval);
    }, [activeStep, structure.length]);

    useEffect(() => {
        animateBoxes(activeStep);
    }, [activeStep]);

    const animateBoxes = (index) => {
        $('.process_structure').eq(index).addClass('active').siblings().removeClass('active');

        $('.process_structure.active').css({
            'background-color': 'white',
            'color': 'black',
        
        })
        // .find('img').css('filter', 'brightness(100%) invert(100%)'); 

        $('.process_structure.inactive').css({
            'background-color': '#e5e5ff',
            'color': 'black'
        })
        .find('img').css('filter', 'brightness(0%) invert(0%)');
    };

    return (
        <Container>
            <div className='holder mb-5 '>
                <h1 className='text-center font-weight-bold'>Our Stakeholders</h1>
            </div>
            <div >
                <Stepper activeStepperbox={activeStep} />
            </div>

            <div>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                >
                    {structure.map((process, index) => (
                        <Grid item key={index}>
                            <div
                                className={`process_structure ${activeStep === index ? 'active' : 'inactive'}`}
                            >
                                <div className='ml-4' >
                                    <img src={process.icon} alt="img" style={{ width: "30px" }} className={activeStep === index ? 'whiteIcon' : ''} />
                                </div>
                                <div>
                                    <h4>{process.name}</h4>
                                </div>
                                <div className=' d-flex align-content-start description_font '>
                                    <span>{process.description}</span>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    );
}

export default ProcessStructure;
