import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlashModule } from './flash/flash.module';
import { UserModule } from './user/user.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [FlashModule, UserModule, ReservationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
