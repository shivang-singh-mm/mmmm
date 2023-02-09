import { Prisma } from '@prisma/client';
import prisma from '..';
import { IAgentRepository } from '../interfaces';

export default class AgentRepository implements IAgentRepository {
  private repo: Prisma.agentDelegate<Prisma.RejectOnNotFound | Prisma.RejectPerOperation>;
  constructor() {
    this.repo = prisma.agent;
  }
}