import * as moment from 'moment';
import { BaseEntity, Column, Entity, PrimaryColumn, Unique } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity()
@Unique(['uuid'])
export class PaymentTicket extends BaseEntity {
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
    this.createdAt = new Date(Date.now());
    this.deadline = moment(Date.now()).add(5, 'days').toDate();
    this.paid = false;
    this.sent = false;
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
  createdAt: Date;

  @Column()
  deadline: Date;

  @Column()
  value: number;

  @Column()
  paid: boolean;

  @Column()
  sent: boolean;
}
