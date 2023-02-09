import { Prisma } from '@prisma/client';
import prisma from '..';
import { ITransaction } from '../interfaces';

export default class TransactionRepository implements ITransaction {
  private repo: Prisma.transactionDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
  constructor() {
    this.repo = prisma.transaction;
  }
}