import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerModel } from './customer.model';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerModel)
    private usersRepository: Repository<CustomerModel>,
  ) {}
  findOne(id: any) {
    return this.usersRepository.findOne(id);
  }

  findByCustomer(id) {
    return this.usersRepository.findOne(id);
  }

  findAll() {
    return this.usersRepository.find();
  }
}
