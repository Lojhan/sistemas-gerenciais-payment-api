import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PaymentTicketService } from './payment-ticket.service';
import { CreatePaymentTicketDto } from './dto/create-payment-ticket.dto';

@Controller('payment-ticket')
export class PaymentTicketController {
  constructor(private readonly paymentTicketService: PaymentTicketService) {}

  @Post()
  create(@Body() createPaymentTicketDto: CreatePaymentTicketDto) {
    return this.paymentTicketService.create(createPaymentTicketDto);
  }

  @Get(':uuid')
  pay(@Param('uuid') uuid: string) {
    return this.paymentTicketService.pay(uuid);
  }

  @Get('ticket/:uuid')
  getTicket(@Param('uuid') uuid: string) {
    return this.paymentTicketService.getTicket(uuid);
  }
}
