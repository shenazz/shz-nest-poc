import { Module } from '@nestjs/common';
import { BunniesModule } from './bunnies/bunnies.module';

@Module({
  imports: [BunniesModule]
})
export class AppModule {}
