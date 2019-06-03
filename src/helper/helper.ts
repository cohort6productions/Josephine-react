// const dotenv = require('dotenv');
// import dotenv from "dotenv";

// Turn all letter to lowercase and replace all spaces to "-", use at creating url paths
export const nameToPathConvert = (name: string) => {
    return name.toLowerCase().replace(" ", "-");
};

declare const Stripe: any;

export const checkout = (scheme: "plan" | "sku", schemeId: string) => {
    // const env = "test";
    const env = "live";
    let stripeToken = ''
    if (env === "live") {
        stripeToken = process.env.REACT_APP_STRIPE_LIVE_KEY || ''
    } else {
        stripeToken = process.env.REACT_APP_STRIPE_TEST_KEY || ''
    }
    const stripe = Stripe(stripeToken)
    stripe
        .redirectToCheckout({
            items: [{ [scheme]: schemeId, quantity: 1 }],

            // Do not rely on the redirect to the successUrl for fulfilling
            // purchases, customers may not always reach the success_url after
            // a successful payment.
            // Instead use one of the strategies described in
            // https://stripe.com/docs/payments/checkout/fulfillment
            successUrl: "https://josephine-react.netlify.com/orderSuccess",
            cancelUrl: "https://josephine-react.netlify.com/orderFailed"
        })
        .then((result: string) => {
            // tslint:disable-next-line: no-console
            console.log(result);
        });
};

export const getService = (ev: any) => {
    const schemeId = ev.target.dataset.schemeid
    const scheme = ev.target.dataset.scheme
    checkout(scheme, schemeId);
};