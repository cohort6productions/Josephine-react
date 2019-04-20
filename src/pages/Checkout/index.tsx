import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import InjectedCheckoutForm from './components/InjectedCheckoutForm';

class Checkout extends React.Component<{stripe:any}, {}> {
    public render() {
        return (
            <StripeProvider stripe={this.props.stripe} apiKey="pk_test_uXRBfzbDKRt4fkwDMKUVwzXI00T0PJF1dh">
                <Elements>
                    <InjectedCheckoutForm stripe={this.props.stripe} />
                </Elements>
            </StripeProvider>
        )
    }
}

export default Checkout;