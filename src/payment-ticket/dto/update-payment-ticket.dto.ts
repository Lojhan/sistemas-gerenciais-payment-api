import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentTicketDto } from './create-payment-ticket.dto';

export class UpdatePaymentTicketDto extends PartialType(CreatePaymentTicketDto) {}
