import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './components/InjectedCheckoutForm';

interface ICheckOutProps {
    paymentAmount: number;
    paymentType: string;
    onSuccess: () => void;
}
class Checkout extends React.Component<ICheckOutProps, {}> {
    constructor(props: ICheckOutProps){
        super(props)
    }
    public render() {
        const stripeToken = process.env.REACT_APP_STRIPE_LIVE_KEY || ''
        return (
            <StripeProvider apiKey={stripeToken}>
                <Elements>
                    <InjectedCheckoutForm {...this.props}/>
                </Elements>
            </StripeProvider>
        )
    }
}

export default Checkout;