import { HttpService, Injectable } from '@nestjs/common';
import Card from 'src/models/card.model';
import { CreatePaymentDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  constructor(private httpService: HttpService) {}

  create(createPaymentDto: CreatePaymentDto, saleID: string) {
    const result = Card.validateCardData(createPaymentDto);
    if (Object.keys(result).indexOf('value') === -1) throw result;
    this.httpService
      .put('http://localhost:3001/sales/confirm-payment', { saleID })
      .subscribe(
        (s) => console.log(s),
        (e) => console.log(e),
      );
    return Card.getCardData(createPaymentDto.number);
  }
}
