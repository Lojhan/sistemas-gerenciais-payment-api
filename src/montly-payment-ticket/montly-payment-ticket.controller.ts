import { Controller, Post, Body, Get } from '@nestjs/common';
import { MontlyPaymentTicketService } from './montly-payment-ticket.service';
import { CreateMontlyPaymentTicketDto } from './dto/create-montly-payment-ticket.dto';

@Controller('montly-payment-ticket')
export class MontlyPaymentTicketController {
  constructor(
    private readonly montlyPaymentTicketService: MontlyPaymentTicketService,
  ) {}

  @Post()
  create(@Body() createMontlyPaymentTicketDto: CreateMontlyPaymentTicketDto) {
    return this.montlyPaymentTicketService.create(createMontlyPaymentTicketDto);
  }
}
