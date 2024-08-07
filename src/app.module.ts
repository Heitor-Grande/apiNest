import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsertController } from './controllers/insert.controller';
import { InsertService } from './services/insert.service';
import { VerificaToken } from './middleware/verificaToken';
import { DeleteController } from './controllers/delete.controller';
import { DeleteService } from './services/delete.service';

@Module({
  imports: [],
  controllers: [AppController, InsertController, DeleteController],
  providers: [AppService, InsertService, DeleteService],
})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(VerificaToken).forRoutes("*")
  }
}
