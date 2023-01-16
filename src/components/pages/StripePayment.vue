<template>
    <div>
      <stripe-checkout
        ref="checkoutRef"
        mode="payment"
        :pk="publishableKey"
        :lineItems="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
      />
      <button @click="submit">Pay now!</button>
    </div>
  </template>
  
  <script>
  import { StripeCheckout } from '@vue-stripe/vue-stripe';
//   import { getAllService } from '@/services/service';
  export default {
    name:'StripePayment',
    components: {
      StripeCheckout,
    },
    data () {
    //   this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    this.publishableKey = 'pk_test_51MQcneSJ9A0k3bp1svEbGjQmjx06hMCxwmDZv55PVn2hRdh49E3Yba3RODIdM271nYKr6hmXnQ3YAwytFKlQUuqA00k0XDmmYT';
      return {
        loading: false,
        lineItems: [
          {
            price: 'price_1MQgFGSJ9A0k3bp1as0JANGd', // The id of the one-time price you created in your Stripe dashboard
            quantity: 1,
          },
        ],
        successURL: 'http://localhost:3001/bookingstatus',
        cancelURL: 'http://localhost:3001',
      };
    },
    methods: {
      submit () {
        // You will be redirected to Stripe's secure checkout page
        this.$refs.checkoutRef.redirectToCheckout();
      },
    },
  };
  </script>