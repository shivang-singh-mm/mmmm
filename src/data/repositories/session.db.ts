import { Prisma } from '@prisma/client';
import prisma from '..';
import { ISessionData } from '../interfaces';

export default class SessionDataRepository implements ISessionData {
  private repo: Prisma.session_dataDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
  constructor() {
    this.repo = prisma.session_data;
  }
}