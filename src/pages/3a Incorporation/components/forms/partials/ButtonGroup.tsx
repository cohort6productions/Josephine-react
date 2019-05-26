import * as React from 'react';
interface IButtonGroup {
    nextStep: () => void;
    back: () => void;
    disabled?: boolean | false;
    buttonText?: string | 'Next Step';
}
const ButtonGroup = (props: IButtonGroup) => {
    const {back, nextStep, disabled, buttonText} = props;
    return (
        <div className="row justify-content-center mx-auto col-md-10 col-12 mt-3">
            <div className="col-12 col-md-4 pr-md-1">
                <button type="button" className="btn btn-default w-100" onClick={back}>Back</button>
            </div>
            <div className="col-12 col-md-8 pl-md-1">
                <button type="button" className="btn btn--incorp w-100" onClick={nextStep} disabled={disabled}>{buttonText}</button>
            </div>
        </div>
    )
}

export default ButtonGroup;