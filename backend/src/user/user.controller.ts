import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { User } from '@prisma/client';
import { ReadUser, CreateUser, DeleteUser, UpdateUser } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Get()
    async retrieveById(@Query() query: ReadUser): Promise<User | User[]> {
        if (query.id) {
            return this.userService.retrieveOne(query)
        }
        return this.userService.retrieveAll()
    }

    @Post("/update")
    update(@Body() body: UpdateUser): Promise<User> {
        return this.userService.update(body)
    }

    @Post()
    create(@Body() body: CreateUser): Promise<User> {
        return this.userService.create(body)
    }

    @Delete()
    delete(@Query() query: DeleteUser) {
        this.userService.delete(query)
    }


}
