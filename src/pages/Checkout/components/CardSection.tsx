import * as React from 'react';
import { CardElement } from 'react-stripe-elements';

class CardSection extends React.Component {
    public render() {
        return (
            <label>
                Card details
                <CardElement className="form-control col-12" />
            </label>
        );
    }
}

export default CardSection;