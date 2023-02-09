import { Prisma } from '@prisma/client';
import prisma from '..';
import { IBookingData } from '../interfaces';

export default class BookingDataRepository implements IBookingData {
  private repo: Prisma.booking_dataDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
  constructor() {
    this.repo = prisma.booking_data;
  }
}