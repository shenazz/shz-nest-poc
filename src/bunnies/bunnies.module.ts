import { Module } from '@nestjs/common';
import { BunniesService } from './bunnies.service';
import { BunniesController } from './bunnies.controller';

@Module({
  controllers: [BunniesController],
  providers: [BunniesService]
})
export class BunniesModule {}
