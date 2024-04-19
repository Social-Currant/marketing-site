import Stripe from "stripe";


const stripeClient = new Stripe(process.env.STRIPE_API_KEY)

const DEFAULT_PLANS = {
  data: [
    {
      name: "Example Tier",
    }
  ]
}

export default defineEventHandler((event) => {
    if (event.req.method === 'GET') {
      try {
        const activePlans = stripeClient.products.search({
          query: "active:'true' AND name~'tier'",
        })
        return activePlans
      }
      catch(error) {
        console.error(error)
        return DEFAULT_PLANS
      }
    }
  });