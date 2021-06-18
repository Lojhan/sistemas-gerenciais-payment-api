import { tuple } from 'src/models/card.model';

export class CreatePaymentDto {
  number: string;
  securityCode: number;
  validityDate: tuple;
  cardHolder: string;
}
