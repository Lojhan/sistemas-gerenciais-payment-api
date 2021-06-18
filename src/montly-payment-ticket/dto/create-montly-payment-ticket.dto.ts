export class CreateMontlyPaymentTicketDto {
  clientName: string;
  clientCPF: string;
  clientPhone: string;
  value: number;
  saleId: string;
  installments: number;
}
