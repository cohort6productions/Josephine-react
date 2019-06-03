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
   shareholders: any[];
   UpdateShares: (occupied: number) => void;
   left_shares: number;
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
        // tslint:disable-next-line:no-console
        console.log(newShares);
        this.setState({
            occupied_shares: newShares 
        }, () => {
            this.props.UpdateShares(newShares)
        })
    }

    public componentDidMount = () => {
        if (!!this.props.shareholders) {
            let occupied = 0;
            this.props.shareholders.forEach((holder) => {
                occupied += holder.share_composition
            })
            this.setState({
                occupied_shares: occupied
            },() => {
                this.props.UpdateShares(occupied)
            })
        }
        this.props.validateForm()
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
                        <input type="text" className="form-control text-center control-box" value={`${this.props.total_shares} Total shares`} disabled={true} />
                    </div>
                }
                whole_shares={this.props.total_shares}
                total_shares={this.props.total_shares - this.state.occupied_shares}
                description="<p>There is a minimum requirement for all company;
                <br/>
                1 shareholder (corporate or individual; HK resident or Non-HK resident), and 
                <br/>
               1 individual director (HK resident or Non-HK resident) in your company.
               </p>
               <p>The shareholder and director can be the same person, but, at least, one director (if only one or if several) must be an individual/natural person.</p>">
                    <ShareholderForm {...this.props} category="" total_shares={this.props.total_shares - this.state.occupied_shares} />
                </InnerForm>
            </>
        );
    }
}

const checkIfFilesAreTooBig = (fileObj?: any): boolean => {
    let valid = true
    const file = fileObj.file
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
        const FileObj = {
            name: "",
            url: "",
            file: "",
            source: "Shareholder"
        }
        return {
            article_of_associate: FileObj,
            address_proof: FileObj,
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
            business_license: FileObj,
            identity: FileObj,
            category: ""
        };
    },

    validationSchema: (props:IShareholderProps) => Yup.object().shape({
        email: Yup.string()
            .email("Invalid email")
            .required("Email Required"),
        share_composition: Yup.number()
            .moreThan(0, 'Shareholders should own atleast 1 share')
            .lessThan(props.left_shares + 1, `shareholders cannot own more than ${props.left_shares}`),
        identity: Yup.object()
            .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig),
        address_proof: Yup.object()
            .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig),
        business_license: Yup.object()
            .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig),
        article_of_associate: Yup.object()
            .test('is-too-big', 'File size should be less than 1Mb', checkIfFilesAreTooBig)
    }),

    handleSubmit: (values, { setSubmitting }) => {
        
        setSubmitting(false);
    }

})(MainForm);

export default Step4;