import React, {createContext, useState} from 'react';
import Stepper from "./Stepper";
export const FormContext = createContext(undefined);


function StepComponent(props) {
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    return (
        <FormContext.Provider value={{ activeStepIndex }}>
            <div className="w-screen h-screen flex flex-col items-center justify-start">
                <Stepper />
            </div>
        </FormContext.Provider>
    );
}

export default StepComponent;