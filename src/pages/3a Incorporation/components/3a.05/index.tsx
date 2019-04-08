import { FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { IStepProps } from 'src/Interfaces/FormProps';
import { IFormValues, IPersonalDetails } from 'src/Interfaces/FormValues';
import InnerForm from '../forms/InnerForm';
import ShareholderForm from './ShareholderForm';

interface IShareholderProps extends IStepProps {
   _setValues: (values: any) => void;
   total_shares: number;
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

const Step4 = withFormik<IShareholderProps & FormikProps<IFormValues>, {}>({
    mapPropsToValues: () => {
        return {
            article_of_associate: "",
            address_proof: "",
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
            business_license: "",
            identity: "",
            category: "",
        };
    },

    handleSubmit: (values, { setSubmitting }) => {
        alert(JSON.stringify(values))
        setSubmitting(false);
    },

})(MainForm);
export default Step4;