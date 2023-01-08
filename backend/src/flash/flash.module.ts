import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from 'src/prisma.service';
import { FlashController } from './flash.controller';
import { FlashService } from './flash.service';

@Module({
  controllers: [FlashController],
  providers: [FlashService],
  imports: [PrismaModule]
})
export class FlashModule {}
