import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModel } from './customer/customer.model';
import { InvoiceModel } from './invoice/invoice.model';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'xiao-test-grap',
      // entities: [CustomerModel, InvoiceModel],
      entities: ['dist/**/*.model.js'],
      synchronize: false,
    }),
    CustomerModule,
    InvoiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
