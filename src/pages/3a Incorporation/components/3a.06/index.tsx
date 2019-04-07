import { FormikProps, withFormik } from 'formik';
import * as React from 'react';
import { IStepProps } from 'src/Interfaces/FormProps';
import { IFormValues, IShareholderDetails } from 'src/Interfaces/FormValues';
import InnerForm from '../forms/InnerForm';
import DirectorForm from './DirectorForm';

interface IShareholderProps extends IStepProps {
   _setValues: (values: any) => void;
   shareholders: IShareholderDetails[];
}

class MainForm extends React.Component<IShareholderProps & FormikProps<IFormValues & IShareholderDetails>, {occupied_shares: number}> {
    constructor(props: IShareholderProps & FormikProps<IFormValues & IShareholderDetails>) {
        super(props);
        this.state= {
            occupied_shares: 0
        }
    }

    public render() {
        return (
            <>
                <InnerForm {...this.props} 
                emitValue={() => {}}
                title="Shareholder information" 
                field="shareholder" 
                _innerhtml={
                    
                        this.props.shareholders.map((el, i) => {
                            return (
                                <div key={i} className="form-group col-12">
                                    <input type="text" className="form-control" value={el.firstname+el.lastname} disabled={true} />
                                </div>
                            )
                        })
                    
                }
                description="The process of company incorporation takes around 2 days, and the company green box creation will take another 3 to 4 days to produce. Do let us know if you need to setup a company bank account, as we could assist in arranging an appointment with your preferred bank (HSBC, Heng Sang, DBS…).">
                    <DirectorForm {...this.props} category=""/>
                </InnerForm>
            </>
        );
    }
}

const Step5 = withFormik<IShareholderProps & FormikProps<IFormValues>, {}>({
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
            type: "personal",
        };
    },

    handleSubmit: (values, { setSubmitting }) => {
        alert(JSON.stringify(values))
        setSubmitting(false);
    },

})(MainForm);
export default Step5;