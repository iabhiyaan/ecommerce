import React from "react";
import StripeCheckout from "react-stripe-checkout";
import image from "./CUz.svg";
const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_OWJ4aHZ5WPPc652rxmTTZ3Wg00mTXie98Z";
	const onToken = token => {
		console.log(token);
		alert("Payment is successful");
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="Hats CRWN Ltd."
			billingAddress
			shippingAddress
			image={image}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
