import { Prisma, PrismaClient } from "@prisma/client";
import prisma from "..";


class BaseTable {
  protected _table: any;
  constructor(table: PrismaClient) {
    this._table = table;
  }

  find() {
    this._table.find()
  }
}