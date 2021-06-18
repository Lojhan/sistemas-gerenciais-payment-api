import { Test, TestingModule } from '@nestjs/testing';
import { PaymentTicketController } from './payment-ticket.controller';
import { PaymentTicketService } from './payment-ticket.service';

describe('PaymentTicketController', () => {
  let controller: PaymentTicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentTicketController],
      providers: [PaymentTicketService],
    }).compile();

    controller = module.get<PaymentTicketController>(PaymentTicketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
