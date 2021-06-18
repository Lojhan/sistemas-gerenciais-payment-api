import { Module } from '@nestjs/common';
import { MontlyPaymentTicketService } from './montly-payment-ticket.service';
import { MontlyPaymentTicketController } from './montly-payment-ticket.controller';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [MontlyPaymentTicketController],
  providers: [MontlyPaymentTicketService],
})
export class MontlyPaymentTicketModule {}
