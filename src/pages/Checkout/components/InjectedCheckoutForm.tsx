import * as React from 'react';
import CardSection from './CardSection';

class InjectedCheckoutForm extends React.Component<{stripe:any}, {}> {
    public handleSubmit = (ev:any) => {
        // We don't want to let default form submission happen here, which would refresh the page.
        ev.preventDefault();
    
        // Within the context of `Elements`, this call to createToken knows which Element to
        // tokenize, since there's only one in this group.
        this.props.stripe.createToken({name: 'Jenny Rosen'}).then((token: any) => {
          // tslint:disable-next-line:no-console
          console.log('Received Stripe token:', token);
        });
    
        // However, this line of code will do the same thing:
        //
        // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
    
        // You can also use createSource to create Sources. See our Sources
        // documentation for more: https://stripe.com/docs/stripe-js/reference#stripe-create-source
        //
        // this.props.stripe.createSource({type: 'card', owner: {
        //   name: 'Jenny Rosen'
        // }});
      };
    public render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <CardSection />
                <button>Confirm order</button>
            </form>
        );
    }
}

export default InjectedCheckoutForm;