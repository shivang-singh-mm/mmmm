import { userRepo } from "../data/repositories/repository.factory";
import { BaseServiceParams, UserServiceParams } from "../types";
import UserService from "./user.service";

const baseParams: BaseServiceParams = {
  userRepo
}
const userServiceParams: UserServiceParams = baseParams;

export const userService = new UserService(userServiceParams)