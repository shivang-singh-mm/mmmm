import { BaseServiceParams } from "../types";
import UserRepository from "../data/repositories/user.db";
import axios, { AxiosError } from "axios";


export class BaseService {
  protected userRepo: UserRepository
  constructor(params: BaseServiceParams) {
    this.userRepo = params.userRepo
  }

  async callApi(url: string, method: string, payload?: Object) {
    if (method.toUpperCase() === 'POST') {
      return await axios({
        url,
        method,
        data: payload
      })
    } else if (method.toUpperCase() === 'GET') {
      return await axios({
        url,
        method
      })
    }

  }
}