export interface IStepProps {
    nextStep: () => void;
    back: () => void;
    setAllFieldsTouched: (key: string) => void
}