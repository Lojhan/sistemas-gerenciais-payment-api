import { Injectable } from '@nestjs/common';
import { CreateMontlyPaymentTicketDto } from './dto/create-montly-payment-ticket.dto';
import { compile } from 'handlebars';
import { readFileSync } from 'fs';
import { HttpService } from '@nestjs/common';

@Injectable()
export class MontlyPaymentTicketService {
  constructor(private httpService: HttpService) {}

  create(createMontlyPaymentTicketDto: CreateMontlyPaymentTicketDto) {
    const file = readFileSync('./templates/payment-ticket.hbs').toString();
    this.httpService
      .put('http://localhost:3001/sales/confirm-payment', {
        saleID: createMontlyPaymentTicketDto.saleId,
      })
      .subscribe(
        (s) => console.log(s),
        (e) => console.log(e),
      );
    return compile(file)(createMontlyPaymentTicketDto);
  }
}
