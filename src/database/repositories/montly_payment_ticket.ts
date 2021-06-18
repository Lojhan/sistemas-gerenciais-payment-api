import { EntityRepository, Repository } from 'typeorm';
import { MontlyPaymentTicket } from '../entities/montly_payment_ticket.entity';

@EntityRepository(MontlyPaymentTicket)
export class MontlyPaymentTicketRepositoty extends Repository<MontlyPaymentTicket> {}
