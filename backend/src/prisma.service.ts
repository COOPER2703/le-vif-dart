import { INestApplication, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient {
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}

@Module({
  providers: [PrismaService],
  exports: [PrismaService]
})
export class PrismaModule {}
