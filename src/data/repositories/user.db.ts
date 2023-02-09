import { Prisma, user } from '@prisma/client'
import prisma from '../index'
import { IUserRepository } from '../interfaces'

export default class UserRepository implements IUserRepository {
  private repo: Prisma.userDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
  constructor() {
    this.repo = prisma.user;
  }
  async create(data: Omit<user, 'user_id' | 'updated_at' | 'created_at'>): Promise<user> {
    return this.repo.create({data});
  }

  async saveDataToDb(data: Omit<user, 'user_id' | 'updated_at' | 'created_at'>): Promise<user> {
    console.log(data);
    
    const user = await this.findById('phone_number', data.phone_number, {});
    console.log(user);
    
    if(!user.length) {
      return this.repo.create({data});
    }
    return user[0];
  }
  findById<T extends string | string[]>(key: string, value: T, include: Object): Promise<user[]> {    
    return this.repo.findMany({where: { [`${key}`]: {in: value}}})
  }
  update(data: user, key: string, value: any): Promise<user> {
    return this.repo.update({where: {[`${key}`]: value}, data})
  }

}