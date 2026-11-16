import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelModule } from './travel/travel.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TravelModule,ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
