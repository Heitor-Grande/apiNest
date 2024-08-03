import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsertController } from './controllers/insert.controller';
import { InsertService } from './services/insert.service';

@Module({
  imports: [],
  controllers: [AppController, InsertController],
  providers: [AppService, InsertService],
})
export class AppModule { }
