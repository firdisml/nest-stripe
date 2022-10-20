import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeModule } from './stripe/stripe.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [
    StripeModule.forRoot(
      'sk_test_51LuzzFC3J13Tnkehs6sHdAP3GWmo0XaOSSbFnJu1D9NynmdW9y6qig5NDbeUXrKHbUwhUS0CSua0wPwlZWZNhGjF008gfZgazN',
      { apiVersion: '2022-08-01' },
    ),
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
