import { ForbiddenException } from '@nestjs/common';
import { type } from 'os';
import { CreatePaymentDto } from 'src/cards/dto/create-card.dto';

export type tuple = {
  month: number;
  year: number;
};

export default class Card {
  number: string;
  securityCode: number;
  validityDate: tuple;
  cardHolder: string;
  response: { value: number; message: string };

  constructor(
    number: string,
    securityCode: number,
    validityDate: tuple,
    cardHolder: string,
    response: any,
  ) {
    this.number = number;
    this.securityCode = securityCode;
    this.validityDate = validityDate;
    this.cardHolder = cardHolder;
    this.response = response;
  }

  static getCardData(number: string): Card {
    console.log(number);
    const card = cards.find((card) => card.number === number);

    if (!card) {
      throw new ForbiddenException('Dados Inválidos');
    }

    return card;
  }

  static validateCardData(cardData: CreatePaymentDto) {
    const card = Card.getCardData(cardData.number);

    Object.keys(card).forEach((key) => {
      if (key !== 'response') {
        if (card[key] !== cardData[key]) {
          if (card[key].month) {
            if (JSON.stringify(card[key]) !== JSON.stringify(cardData[key])) {
              console.log(key);
              throw new ForbiddenException('Dados Inválidos');
            }
          } else {
            throw new ForbiddenException('Dados Inválidos');
          }
        }
      }
    });

    return {
      1: card.response,
      2: new ForbiddenException(card.response.message),
      3: new ForbiddenException(card.response.message),
    }[card.response.value];
  }
}

const cards: Card[] = [
  new Card(
    '1234 5678 9101 1213',
    123,
    { month: 5, year: 27 },
    'Vinícius Lojhan',
    {
      value: 1,
      message: 'Cartão aceito',
    },
  ),
  new Card(
    '4321 7567 9789 2345',
    123,
    { month: 5, year: 27 },
    'Vinícius Lojhan',
    {
      value: 2,
      message: 'Limite Insuficiente',
    },
  ),
  new Card(
    '6546 4567 2345 4345',
    123,
    { month: 5, year: 27 },
    'Vinícius Lojhan',
    {
      value: 3,
      message: 'Dados Inválidos (sandbox)',
    },
  ),
];
