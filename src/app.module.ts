import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsertController } from './controllers/insert.controller';
import { InsertService } from './services/insert.service';
import { VerificaToken } from './middleware/verificaToken';

@Module({
  imports: [],
  controllers: [AppController, InsertController],
  providers: [AppService, InsertService],
})
export class AppModule implements NestModule { 
  configure(consumer: MiddlewareConsumer) {
      consumer.apply(VerificaToken).forRoutes("*")
  }
}
