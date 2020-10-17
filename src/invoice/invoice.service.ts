import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoiceModel } from './invoice.model';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(InvoiceModel)
    private usersRepository: Repository<InvoiceModel>,
  ) {}

  findByCustomer(id) {
    return this.usersRepository.find(id);
  }
}
