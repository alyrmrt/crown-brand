import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HMxfcCNHjqVqR6bgmNfMUvRDlyRHXZx1KExnYDkvIAtDbpaMmEA25IUMWUjduYYDwJRrwHSTqvNmBN4IVU5W5A500HnW4uWLp'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }


 return (
   <StripeCheckout
      label='Pay Now'
      name='CRWN Brand Co.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
   />
 )
}

export default StripeCheckoutButton
