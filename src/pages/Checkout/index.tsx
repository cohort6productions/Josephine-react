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
        return (
            <StripeProvider apiKey="pk_test_uXRBfzbDKRt4fkwDMKUVwzXI00T0PJF1dh">
                <Elements>
                    <InjectedCheckoutForm {...this.props}/>
                </Elements>
            </StripeProvider>
        )
    }
}

export default Checkout;