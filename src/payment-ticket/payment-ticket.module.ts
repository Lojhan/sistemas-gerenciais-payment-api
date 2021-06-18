import { HttpModule, Module } from '@nestjs/common';
import { PaymentTicketService } from './payment-ticket.service';
import { PaymentTicketController } from './payment-ticket.controller';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentTicketRepositoty } from 'src/database/repositories/payment_ticket.repository';

@Module({
  imports: [
    HttpModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([PaymentTicketRepositoty]),
  ],
  controllers: [PaymentTicketController],
  providers: [PaymentTicketService],
})
export class PaymentTicketModule {}
