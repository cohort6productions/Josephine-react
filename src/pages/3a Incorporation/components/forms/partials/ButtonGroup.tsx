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
        <div className="row justify-content-center w-100 mx-auto">
            <div className="col-auto">
                <button type="button" className="form-control btn btn-default" onClick={back}>Back</button>
            </div>
            <div className="col-auto">
                <button type="button" className="form-control btn btn-warning" onClick={nextStep} disabled={disabled}>{buttonText}</button>
            </div>
        </div>
    )
}

export default ButtonGroup;