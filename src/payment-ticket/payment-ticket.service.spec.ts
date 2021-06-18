import { Test, TestingModule } from '@nestjs/testing';
import { PaymentTicketService } from './payment-ticket.service';

describe('PaymentTicketService', () => {
  let service: PaymentTicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentTicketService],
    }).compile();

    service = module.get<PaymentTicketService>(PaymentTicketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
