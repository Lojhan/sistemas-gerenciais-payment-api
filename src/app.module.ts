import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { typeOrmConfig } from './database/config/typeorm.config';
import { MontlyPaymentTicketModule } from './montly-payment-ticket/montly-payment-ticket.module';
import { PaymentTicketModule } from './payment-ticket/payment-ticket.module';

@Module({
  imports: [
    CardsModule,
    MontlyPaymentTicketModule,
    PaymentTicketModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
