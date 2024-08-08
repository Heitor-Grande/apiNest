import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InsertController } from './controllers/insert.controller';
import { InsertService } from './services/insert.service';
import { VerificaToken } from './middleware/verificaToken';
import { DeleteController } from './controllers/delete.controller';
import { DeleteService } from './services/delete.service';
import { SelectController } from './controllers/select.controller';
import { SelectService } from './services/select.service';
import { UpdateController } from './controllers/update.controller';
import { UpdateService } from './services/update.service';

@Module({
  imports: [],
  controllers: [AppController, InsertController, DeleteController, SelectController, UpdateController],
  providers: [AppService, InsertService, DeleteService, SelectService, UpdateService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VerificaToken).forRoutes("*")
  }
}
