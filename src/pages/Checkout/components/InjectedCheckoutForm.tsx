import * as React from 'react';
// import CardSection from './CardSection';
import {injectStripe, ReactStripeElements, CardElement} from 'react-stripe-elements';

interface ICheckOutProps {
    paymentAmount: number;
    paymentType: string;
    onSuccess: () => void;
}
class InjectedCheckoutForm extends React.Component<ICheckOutProps & ReactStripeElements.InjectedStripeProps, {name: string, amount: number}> {
    constructor(props: ICheckOutProps & ReactStripeElements.InjectedStripeProps) {
        super(props)
        this.state = {
            name: '',
            amount: 0
        }

        this.handleChange = this.handleChange.bind(this)
    }
    public handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (!!this.props.stripe) {
                const {error, token}  = await this.props.stripe.createToken({name: this.state.name});
                const amount = this.state.amount;
                if (!!token && !error) {
                    const res = await fetch(`${process.env.REACT_APP_API_URL}/payment`, {
                        method: 'POST',
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({
                            "token": token,
                            "amount": amount
                        })
                    })

                    if (res) {
                        if (!!this.props.onSuccess){
                            this.props.onSuccess()
                        }
                    }
                      
                }
            }
        }catch(e) {
            throw e;
        }
    }

    public componentDidMount = () => {
        this.setState({
            amount: this.props.paymentAmount
        })
    }

    public handleChange = (e: React.ChangeEvent<HTMLInputElement>, statename: string) => {
        this.setState({
            name: e.target.value
        })
    }

    public render() {
        return (
            <div className="container my-3">
                <form onSubmit={this.handleSubmit} className="form col-12">
                    <div className="form-group">
                        <label>Name</label>
                        <input className="form-control" type="text" onChange={this.handleChange.bind(this,'name')}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" onChange={this.handleChange.bind(this,'email')}/>
                    </div>
                    <div className="form-group">
                        <label>Card Details</label>
                        <CardElement />
                    </div>
                    <button type="submit" className="btn btn--stripe">Confirm order</button>
                </form>
            </div>
        );
    }
}

export default injectStripe(InjectedCheckoutForm);