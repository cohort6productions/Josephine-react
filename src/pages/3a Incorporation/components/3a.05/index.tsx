import { FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { IStepProps } from 'src/Interfaces/FormProps';
import { IFormValues, IPersonalDetails } from 'src/Interfaces/FormValues';
import InnerForm from '../forms/InnerForm';
import ShareholderForm from './ShareholderForm';
import * as Yup from 'yup';

interface IShareholderProps extends IStepProps {
   _setValues: (values: any) => void;
   total_shares: number;
   shareholders: any[]
}

class MainForm extends React.Component<IShareholderProps & FormikProps<IFormValues & IPersonalDetails>, {occupied_shares: number}> {
    constructor(props: IShareholderProps & FormikProps<IFormValues & IPersonalDetails>) {
        super(props);
        this.state= {
            occupied_shares: 0
        }
    }

    public handleShares = (value: IPersonalDetails, event: string) => {
        let newShares = this.state.occupied_shares
        if (event === 'submit') {
            newShares = this.state.occupied_shares + value.share_composition
        }else {
            newShares = this.state.occupied_shares - value.share_composition
        }
        this.setState({
            occupied_shares: newShares 
        })
    }

    public render() {
        return (
            <>
                <InnerForm {...this.props} 
                emitValue={this.handleShares}
                title="Shareholder information" 
                field="shareholder" 
                oldValues={this.props.shareholders}
                _innerhtml={
                    <div className="form-group col-12">
                        <input type="number" className="form-control" value={this.props.total_shares} disabled={true} />
                    </div>
                }
                description="The process of company incorporation takes around 2 days, and the company green box creation will take another 3 to 4 days to produce. Do let us know if you need to setup a company bank account, as we could assist in arranging an appointment with your preferred bank (HSBC, Heng Sang, DBS…).">
                    <ShareholderForm {...this.props} category="" total_shares={this.props.total_shares - this.state.occupied_shares} />
                </InnerForm>
            </>
        );
    }
}

// const SUPPORTED_FORMATS = ['image/jpeg', 'image/png', 'pdf'];
// const ShareholderSchema = {};
const checkIfFilesAreTooBig = (file?: string): boolean => {
    let valid = true
    if (file) {
        const stringLength = file.length - 'data:image/png;base64,'.length;

        const sizeInBytes = 4 * Math.ceil((stringLength / 3))*0.5624896334383812;
        const sizeInMb = (sizeInBytes/1000)/1000;


        if (sizeInMb > 1) {
            valid = false
        }
    }
    return valid
}

const Step4 = withFormik<IShareholderProps & FormikProps<IFormValues>, {}>({
    mapPropsToValues: () => {
        return {
            article_of_associate: undefined,
            address_proof: undefined,
            authorized_person: "",
            firstname: "",
            lastname: "",
            email: "",
            occupation: "",
            phone: "",
            country: "",
            address:"",
            tax_number: "",
            tax_payable_country: "",
            share_composition: 0,
            companyname: "",
            business_license: undefined,
            identity: '',
            category: ""
        };
    },

    validationSchema: (props:IShareholderProps) => Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email Required"),
        share_composition: Yup.number()
            .lessThan(props.total_shares + 1, `shareholders cannot own more than total shares ${props.total_shares}`),
        identity: Yup.string()
            .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig),
        address_proof: Yup.string()
            .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig),
        business_license: Yup.string()
            .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig),
        article_of_associate: Yup.string()
            .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig)
    }),

    handleSubmit: (values, { setSubmitting }) => {
        
        setSubmitting(false);
    }

})(MainForm);

export default Step4;