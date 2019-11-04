import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ZitatService } from './zitat.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ZitatService],
})
export class AppModule {}
