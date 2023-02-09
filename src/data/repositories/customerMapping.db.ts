import { Prisma } from '@prisma/client';
import prisma from '..';
import { ICustomerMapping } from '../interfaces';

export default class CustomerMappingRepository implements ICustomerMapping{
  private repo: Prisma.customer_mappingDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
  constructor() {
    this.repo = prisma.customer_mapping;
  }
}