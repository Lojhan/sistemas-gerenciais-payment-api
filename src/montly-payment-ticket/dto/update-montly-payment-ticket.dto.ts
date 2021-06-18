import { PartialType } from '@nestjs/mapped-types';
import { CreateMontlyPaymentTicketDto } from './create-montly-payment-ticket.dto';

export class UpdateMontlyPaymentTicketDto extends PartialType(
  CreateMontlyPaymentTicketDto,
) {}
