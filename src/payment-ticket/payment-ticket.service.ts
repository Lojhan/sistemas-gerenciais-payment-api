import { Injectable } from '@nestjs/common';
import { CreatePaymentTicketDto } from './dto/create-payment-ticket.dto';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentTicketRepositoty } from 'src/database/repositories/payment_ticket.repository';
import { readFileSync } from 'fs';
import { compile } from 'handlebars';
import * as moment from 'moment';
import { LessThan, MoreThan } from 'typeorm';
import { HttpService } from '@nestjs/common/http';

@Injectable()
export class PaymentTicketService {
  constructor(
    @InjectRepository(PaymentTicketRepositoty)
    private paymentTicketRepository: PaymentTicketRepositoty,
    private httpService: HttpService,
  ) {}

  async create(createPaymentTicketDto: CreatePaymentTicketDto) {
    try {
      const ticket = await this.paymentTicketRepository
        .create(createPaymentTicketDto)
        .save();
      const data = compile(
        readFileSync('./templates/payment-ticket.hbs').toString(),
      )({
        ...ticket,
        deadline: moment(ticket.createdAt).add(5, 'days'),
      });

      this.httpService
        .put('http://localhost:3001/sales/send-ticket', {
          ...createPaymentTicketDto,
          ...ticket,
        })
        .subscribe(
          (s) => console.log(s),
          (e) => console.log(e),
        );
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  // @Cron('* 30 5 * * 1-5')
  @Cron('* * * * * *')
  async validateTickets() {
    const data = await this.paymentTicketRepository.find({
      where: {
        deadline: MoreThan(
          new Date(Date.now()).toISOString().replace('T', '  '),
        ),
        sent: false,
      },
    });
    data.forEach((ticket) => {
      if (ticket.paid) {
        this.httpService
          .put('http://localhost:3001/sales/confirm-payment', {
            ticket,
          })
          .subscribe(
            () => {
              ticket.sent = true;
              ticket.save();
            },
            (e) => console.log(e),
          );
      }
    });
  }

  async pay(uuid: string) {
    try {
      const ticket = await this.paymentTicketRepository.findOne(uuid);
      ticket.paid = true;
      return await ticket.save();
    } catch (e) {
      console.log(e);
    }
  }

  async getTicket(uuid: string) {
    try {
      const ticket = await this.paymentTicketRepository.findOne(uuid);
      const data = compile(
        readFileSync('./templates/payment-ticket.hbs').toString(),
      )({
        ...ticket,
        deadline: moment(ticket.createdAt).add(5, 'days'),
      });

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
