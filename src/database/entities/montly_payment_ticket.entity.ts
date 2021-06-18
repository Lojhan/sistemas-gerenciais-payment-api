import { BaseEntity, Column, Entity, PrimaryColumn, Unique } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
@Unique(['uuid'])
export class MontlyPaymentTicket extends BaseEntity {
  constructor(
    clientName: string,
    clientCPF: string,
    clientPhone: string,
    value: number,
  ) {
    super();
    this.uuid = uuid();
    this.clientName = clientName;
    this.clientPhone = clientPhone;
    this.clientCPF = clientCPF;
    this.value = value;
  }

  @PrimaryColumn()
  uuid: string;

  @Column()
  clientName: string;

  @Column()
  clientCPF: string;

  @Column()
  clientPhone: string;

  @Column()
  value: number;

  @Column()
  installments: number;
}
