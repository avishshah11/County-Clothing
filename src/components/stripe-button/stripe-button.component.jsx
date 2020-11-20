import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HphqWDeI3sGfS0bBFhH5sgCjtgcRHBFnbnjLArNlMvBOVjID6yCxmr9guV62VO2Wtr0gcH8DisYN2jhMk94bk7D00wmzvssVL';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label = 'Pay Now'
            name = 'County Clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    );
};


export default StripeCheckoutButton;