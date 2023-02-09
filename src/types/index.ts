import UserRepository from "../data/repositories/user.db"

export type BaseServiceParams = {
  userRepo: UserRepository
}

export type UserServiceParams = BaseServiceParams & {

}
