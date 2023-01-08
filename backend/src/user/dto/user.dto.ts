
export interface User {
    id: string
    firstname: string
    lastname: string
    email: string
    password: string
    status: UserStatus
}

/* User CRUD */

export interface ReadUser {
    id: string
}

export interface CreateUser {
    firstname: string
    lastname: string
    email: string
    password: string
}

export interface UpdateUser {
    id: string
    firstname: string
    lastname: string
    email: string
    password: string
}

export interface DeleteUser {
    id: string
}

/* Utils */

export enum UserStatus {
    ADMIN = "ADMIN",
    CLIENT = "CLIENT"
}

