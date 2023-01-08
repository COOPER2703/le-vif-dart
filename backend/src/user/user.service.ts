import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { randomUUID } from 'crypto';
import { truncate } from 'fs';
import { PrismaService } from 'src/prisma.service';
import { CreateUser, DeleteUser, ReadUser, UpdateUser, User, UserStatus } from './dto/user.dto';

@Injectable()
export class UserService {

    constructor(private prismaService: PrismaService) {}

    /* Read */
    retrieveOne = async (user: ReadUser) : Promise<User> => {
        const result = await this.prismaService.user.findUnique({
            where: {id: user.id},
            select: {
                id: true,
                firstname: true,
                lastname: true,
                email: true,
                password: true,
                status: true
            }
        })

        return result as User
    }

    retrieveAll = async () : Promise<User[]> => {
        const result = await this.prismaService.user.findMany({
            select: {
                id: true,
                firstname: true,
                lastname: true,
                email: true,
                password: true,
                status: true
            }
        })

        return result as User[]
    }


    /* Create */
    create = async (user: CreateUser) : Promise<User> => {

        const result = await this.prismaService.user.create({
            data: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                status: UserStatus.CLIENT,
            }
        })

        return await this.retrieveOne({id: result.id})
    }

    /* Update */
    update = async (user: UpdateUser) : Promise<User> => {

        const result = await this.prismaService.user.update({
            where: {id: user.id},
            data: {
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                status: UserStatus.CLIENT,
            }
        })

        return await this.retrieveOne({id: result.id})
    }

    /* Delete */
    delete = async (user: DeleteUser) => {
        user.id && await this.prismaService.user.delete({
            where: {id: user.id}
        })
    }


}
