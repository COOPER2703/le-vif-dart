import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateReservation, DeleteReservation, ReadReservation, Reservation, UpdateReservation } from './dto/reservation.dto';

@Injectable()
export class ReservationService {

    constructor(private prismaService: PrismaService) {}

    /* Read */
    retrieveOne = async (reservation: ReadReservation) : Promise<Reservation> => {
        const result = await this.prismaService.reservation.findUnique({
            where: {id: reservation.id},
            select: {
                id: true,
                user: true,
                startDate: true,
                endDate: true,
                flash: true,
            }
        })

        return result as Reservation
    }

    retrieveAll = async () : Promise<Reservation[]> => {
        const result = await this.prismaService.reservation.findMany({
            select: {
                id: true,
                user: true,
                startDate: true,
                endDate: true,
                flash: true,
            }
        })

        return result as Reservation[]
    }


    /* Create */
    create = async (reservation: CreateReservation) : Promise<Reservation> => {

        const result = await this.prismaService.reservation.create({
            data: {
                userId: reservation.user_id,
                startDate: reservation.startDate,
                endDate: reservation.endDate,
                flashId: reservation.flash_id,
            }
        })

        return await this.retrieveOne({id: result.id})
    }

    /* Update */
    update = async (reservation: UpdateReservation) : Promise<Reservation> => {

        const result = await this.prismaService.reservation.update({
            where: {id: reservation.id},
            data: {
                userId: reservation.user_id,
                startDate: reservation.startDate,
                endDate: reservation.endDate,
                flashId: reservation.flash_id,
            }
        })

        return await this.retrieveOne({id: result.id})
    }

    /* Delete */
    delete = async (reservation: DeleteReservation) => {
        await this.prismaService.reservation.delete({
            where: {id: reservation.id}
        })
    }
}
