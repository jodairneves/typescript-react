import { Knex } from "../connection"
import { TableNames } from "../TableNames"


interface IUserToCreate {
    name: string,
    username?: string,
    email: string,
    password: string
}

const createUser = async (userToCreate: IUserToCreate) => {
    await Knex(TableNames.user).insert(userToCreate);
}

export const UserProvider = {
    createUser
}