import * as React from 'react';
import {injectStripe, ReactStripeElements, CardElement} from 'react-stripe-elements';

interface ICheckOutProps {
    paymentAmount: number;
    paymentType: string;
    onSuccess: () => void;
}

interface ICheckOutState {
    name: string;
    amount: number;
    errorMessage: string;
    email: string;
    loading: boolean;
}
class InjectedCheckoutForm extends React.Component<ICheckOutProps & ReactStripeElements.InjectedStripeProps, ICheckOutState > {
    constructor(props: ICheckOutProps & ReactStripeElements.InjectedStripeProps) {
        super(props)
        this.state = {
            name: '',
            amount: 0,
            errorMessage: '',
            email: '',
            loading: false
        }
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }
    public handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (!!this.state.email && !!this.state.name) {
                this.setState({
                    loading: true
                })
                if (!!this.props.stripe) {
                    const {error, token}  = await this.props.stripe.createToken({name: this.state.name});
                    const {amount, email} = this.state;
                    if (!!token && !error) {
                        const res = await fetch(`${process.env.REACT_APP_API_URL}/payment`, {
                            method: 'POST',
                            headers: {
                                "Content-type": "application/json"
                            },
                            body: JSON.stringify({
                                "token": token,
                                "amount": amount,
                                "billing_email": email
                            })
                        })

                        if (res.ok) {
                            this.setState({
                                loading: false
                            })

                            if (!!this.props.onSuccess){
                                this.props.onSuccess()
                            }
                        } else {
                            throw res.statusText
                        }
                    }
                }
            } else {
                this.setState({
                    errorMessage: 'Name and Email are required !'
                })
            }
        }catch(error) {
            this.setState({
                loading: false,
                errorMessage: error
            })
        }
    }

    public componentDidMount = () => {
        this.setState({
            amount: this.props.paymentAmount
        })
    }

    public handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value,
            errorMessage: ''
        } as {name: string; email: string; errorMessage: string})
    }

    public handleChange = ({error}: {error?: any}) => {
        if (error) {
            this.setState({errorMessage: error.message});
        } else {
            this.setState({errorMessage: ''});
        }
    };

    public render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.handleSubmit} className="form col-12">
                    <div className="error my-3" role="alert">
                        <p className="text-danger">{this.state.errorMessage}</p>
                    </div>
                    <div className="form-group">
                        <label>Selected Package</label> 
                        <input type="text" className="form-control" disabled={true} value={this.props.paymentType} />
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" name="name" onChange={this.handleFieldChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" name="email" onChange={this.handleFieldChange}/>
                    </div>
                    <div className="form-group">
                        <label>Card Details</label>
                        <CardElement onChange={this.handleChange}  hidePostalCode={true} />
                    </div>
                    
                    <button type="submit" disabled={this.state.loading} className="btn btn--stripe">Pay HK${this.props.paymentAmount}</button>
                </form>
            </div>
        );
    }
}

export default injectStripe(InjectedCheckoutForm);