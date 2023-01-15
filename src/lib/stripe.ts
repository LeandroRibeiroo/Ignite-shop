import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.REACT_APP_STRIPE_SECRET_KEY ?? '',
  {
    apiVersion: '2022-11-15',
    appInfo: {
      name: 'Ignite Shop'
    }
  }
);
