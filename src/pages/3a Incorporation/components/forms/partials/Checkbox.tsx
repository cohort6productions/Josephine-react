import { Field, FormikProps } from "formik";
import { IFormValues } from 'src/Interfaces/FormValues';
import * as React from 'react'

const Checkbox = (props: {name: string; value: string;} & FormikProps<IFormValues>) => {
    const handleCheckbox = () => (event:any) => {
        if (props.values[props.name].includes(props.value)) {
            const nextValue = props.values[props.name].filter(
              (value: any) => value !== props.value
            );
            props.setFieldValue(props.name, nextValue);
        } else {
            const nextValue = props.values[props.name].concat(props.value);
            props.setFieldValue(props.name, nextValue);
        }
    }
    return (
        <Field name={props.name}>
            <label>
            <input
                type="checkbox"
                checked={props.values[props.name].includes(props.value)}
                onChange={handleCheckbox}
            />
            {props.value}
            </label>
        </Field>
    );
}

export default Checkbox;