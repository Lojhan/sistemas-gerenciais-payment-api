import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [HttpModule],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
