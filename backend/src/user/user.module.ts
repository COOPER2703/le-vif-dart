import { Module } from '@nestjs/common';
import { PrismaModule, PrismaService } from 'src/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule],
  exports: [UserService]
})
export class UserModule {}
