import Stripe from "stripe";


const stripeClient = new Stripe(process.env.STRIPE_API_KEY)

const DEFAULT_PLANS = {

}

export default defineEventHandler((event) => {
    if (event.req.method === 'GET') {
      try {
        return stripeClient.products.list()
      }
      catch(error) {
        console.error(error)
        return DEFAULT_PLANS
      }
    }
  });