import { EntityRepository, Repository } from 'typeorm';
import { PaymentTicket } from '../entities/payment_ticket.entity';

@EntityRepository(PaymentTicket)
export class PaymentTicketRepositoty extends Repository<PaymentTicket> {}
