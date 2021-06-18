import { Test, TestingModule } from '@nestjs/testing';
import { MontlyPaymentTicketService } from './montly-payment-ticket.service';

describe('MontlyPaymentTicketService', () => {
  let service: MontlyPaymentTicketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MontlyPaymentTicketService],
    }).compile();

    service = module.get<MontlyPaymentTicketService>(
      MontlyPaymentTicketService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
