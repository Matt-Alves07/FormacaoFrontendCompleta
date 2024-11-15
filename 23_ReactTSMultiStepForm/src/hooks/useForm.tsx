import { ReactElement, FormEvent, useState } from "react";

export function useForm(steps : ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0);

    function changeSteps(i:number, e?:FormEvent) {
        if (e)
            e.preventDefault();

        if (i < 0 || i >= steps.length)
            return;

        setCurrentStep(i);
    }

    return {
        changeSteps,
        currentStep,
        currentComponent: steps[currentStep],
        isLastStep: currentStep === steps.length - 1 ? true : false,
    };
}