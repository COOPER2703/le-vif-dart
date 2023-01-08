import { Body, Controller, Delete, Get, Query } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { CreateReservation, DeleteReservation, ReadReservation, Reservation } from './dto/reservation.dto';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {

    constructor(private readonly reservationService: ReservationService) {}

    @Get()
    async retrieve(@Query() query: ReadReservation): Promise<Reservation | Reservation[]> {
        if (query.id) {
            return this.reservationService.retrieveOne(query)
        }
        return this.reservationService.retrieveAll()
    }

    @Post()
    create(@Body() body: CreateReservation): Promise<Reservation> {
        return this.reservationService.create(body)
    }

    @Delete()
    delete(@Query() query: DeleteReservation) {
        this.reservationService.delete(query)
    }
}
