import { Controller, Post, Body, Get } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CreatePaymentDto } from './dto/create-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  create(
    @Body() createPaymentDto: CreatePaymentDto,
    @Body('saleID') saleId: string,
  ) {
    return this.cardsService.create(createPaymentDto, saleId);
  }

  @Get()
  test() {
    return { test: 'test' };
  }
}
