import { Injectable } from '@nestjs/common';
import { Flash } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { ReadFlash, CreateFlash, UpdateFlash, DeleteFlash } from './dto/flash.dto';

@Injectable()
export class FlashService {

    constructor(private prismaService: PrismaService) {}

    /* Read */
    retrieveOne = async (flash: ReadFlash) : Promise<Flash> => {
        const result = await this.prismaService.flash.findUnique({
            where: {id: flash.id},
            select: {
                id: true,
                title: true,
                price: true,
                imageUrl: true
            }
        })

        return result as Flash
    }

    retrieveAll = async () : Promise<Flash[]> => {
        const result = await this.prismaService.flash.findMany({
            select: {
                id: true,
                title: true,
                price: true,
                imageUrl: true
            }
        })

        return result as Flash[]
    }


    /* Create */
    create = async (flash: CreateFlash) : Promise<Flash> => {

        const result = await this.prismaService.flash.create({
            data: {
                title: flash.title,
                price: flash.price,
                imageUrl: flash.imageUrl
            }
        })

        return await this.retrieveOne({id: result.id})
    }

    /* Update */
    update = async (flash: UpdateFlash) : Promise<Flash> => {

        const result = await this.prismaService.flash.update({
            where: {id: flash.id},
            data: {
                title: flash.title,
                price: flash.price,
                imageUrl: flash.imageUrl
            }
        })

        return await this.retrieveOne({id: result.id})
    }

    /* Delete */
    delete = async (flash: DeleteFlash) => {
        await this.prismaService.flash.delete({
            where: {id: flash.id}
        })
    }

}
