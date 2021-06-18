import { Test, TestingModule } from '@nestjs/testing';
import { MontlyPaymentTicketController } from './montly-payment-ticket.controller';
import { MontlyPaymentTicketService } from './montly-payment-ticket.service';

describe('MontlyPaymentTicketController', () => {
  let controller: MontlyPaymentTicketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MontlyPaymentTicketController],
      providers: [MontlyPaymentTicketService],
    }).compile();

    controller = module.get<MontlyPaymentTicketController>(
      MontlyPaymentTicketController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
