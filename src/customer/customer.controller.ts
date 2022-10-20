import { Controller, Get, Inject } from '@nestjs/common';
import { STRIPE_CLIENT } from 'src/stripe/constant';
import Stripe from 'stripe';

@Controller('customer')
export class CustomerController {
  constructor(@Inject(STRIPE_CLIENT) private stripe: Stripe) {}

  @Get('/checkout')
  async checkout() {
    const session = await this.stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'https://example.com/cancel',
    });

    return { checkout: session.url };
  }
}
