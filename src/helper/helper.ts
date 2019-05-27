// Turn all letter to lowercase and replace all spaces to "-", use at creating url paths
export const nameToPathConvert = (name: string) => {
    return name.toLowerCase().replace(" ", "-");
};

export const checkout = (sku: string) => {
    const stripe = Stripe("pk_test_ygtH7d7VG435kX0qzDZwF239");
    stripe
        .redirectToCheckout({
            // "sku_F8WRZKvH3dwe4Q"
            items: [{ sku, quantity: 1 }],

            // Do not rely on the redirect to the successUrl for fulfilling
            // purchases, customers may not always reach the success_url after
            // a successful payment.
            // Instead use one of the strategies described in

            // https://stripe.com/docs/payments/checkout/fulfillment
            successUrl: "https://josephine-react.netlify.com/",
            cancelUrl: "https://josephine-react.netlify.com/"
        })
        .then((result: string) => {
            // tslint:disable-next-line: no-console
            console.log(result);
        });
};

export const getService = (ev: any) => {
    checkout(ev.target.id);
};
