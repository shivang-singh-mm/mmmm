import { user, agent, customer_mapping, session_data, transaction, booking_data, Prisma } from '@prisma/client';

export interface IUserRepository {
  create: (data: Prisma.SelectSubset<user, Prisma.userCreateArgs>) => Promise<user>
  findById: <T extends string | Array<string>>(key: string, value: T, include: Object) => Promise<Array<user>>
  update: (data: user, key: string, value: any) => Promise<user>
}

export interface IAgentRepository {

}

export interface ICustomerMapping {

}

export interface ISessionData {

}

export interface ITransaction {

}

export interface IBookingData {

}

