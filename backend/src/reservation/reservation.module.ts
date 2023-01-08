import { Module } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationController } from './reservation.controller';
import { PrismaModule } from 'src/prisma.service';

@Module({
  providers: [ReservationService],
  controllers: [ReservationController],
  imports: [PrismaModule]
})
export class ReservationModule {}
