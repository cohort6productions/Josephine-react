import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './components/InjectedCheckoutForm';

class Checkout extends React.Component<{onSuccess: () => void}, {}> {
    public render() {
        return (
            <StripeProvider apiKey="pk_test_uXRBfzbDKRt4fkwDMKUVwzXI00T0PJF1dh">
                <Elements>
                    <InjectedCheckoutForm onSuccess={this.props.onSuccess}/>
                </Elements>
            </StripeProvider>
        )
    }
}

export default Checkout;