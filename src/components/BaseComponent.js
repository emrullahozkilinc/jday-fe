import React, {useState} from 'react';
import {createTheme, Grid, ThemeProvider, Typography} from "@mui/material";
import {Form, Formik} from "formik";
import MuiMiniCard from "./mui/MuiMiniCard";
import MuiStepper from "./mui/MuiStepper";
import SubmissionForm1 from "./pages/SubmissionForm1";
import SubmissionForm2 from "./pages/SubmissionForm2";
import SubmissionForm3 from "./pages/SubmissionForm3";
import SubmissionForm4 from "./pages/SubmissionForm4";
import {FORM_STEP_TITLES} from "../constants/FormStepTitles";
import initialValues from "../objects/FormikInitialValues"
import validationSchema from "../objects/validationSchema";

const font =  "'Fira Sans', sans-serif";
const theme = createTheme({
    typography: {
        fontFamily: font,
        button: {
            textTransform: "none"
        }
    }
});
const cardContents = [
    ["Ne zaman:" , "6 Mayıs 2023, Cumartesi"],
    ["Nerede:" , "Elite World Asia, Istanbul"],
    ["Konferans Saatleri:" ,"09: 00 - 18:00"],
    ["Email:" , "contact@javaday.istanbul"],
    ["Konferans Ücreti:" , "2.999₺ + %18 Vat"]
];


function BaseComponent(props) {

    const [activeStep, setActiveStep] = useState(0);

    const currentValidationSchema = validationSchema[activeStep];

    const handleSubmit = (values, actions) => {
        if (isLastStep) {
            submitForm(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
        return "";
    }

    const isLastStep = () => {
        return activeStep === 3
    }

    const submitForm = (values, actions) => {

    }

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Grid className={"container"}>
                    <Formik
                        initialValues={ initialValues }
                        validationSchema={ currentValidationSchema }
                        onSubmit={handleSubmit}
                    >
                        <Form style={{padding:100}}>
                            <Grid rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid xs={10}>
                                    <Typography className="text-center" variant={"h3"} paragraph>Java Day Istanbul Registration Form</Typography>
                                </Grid>
                            </Grid>

                            <br/>
                            <br/>

                            <Typography variant={"body1"} paragraph>
                                Java Day Istanbul, İstanbul Java Kullanıcı Grubu tarafından desteklenen Türkiye'deki en
                                etkili uluslararası topluluk odaklı yazılım konferanslarından biridir. Konferans 2015 yılından bu
                                yana her yıl İstanbul'da gerçekleşmektedir.
                            </Typography>

                            <br/>
                            <MuiMiniCard cardContents={cardContents}/>
                            <br/>
                            <br/>
                            <br/>

                            <MuiStepper stepTitles={FORM_STEP_TITLES} activeStep={activeStep} setActiveStep={setActiveStep}>
                                <SubmissionForm1/>
                                <SubmissionForm2/>
                                <SubmissionForm3/>
                                <SubmissionForm4/>
                            </MuiStepper>
                        </Form>
                    </Formik>
                </Grid>
            </ThemeProvider>
        </div>
    );
}

export default BaseComponent;