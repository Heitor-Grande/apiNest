import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { userController } from './user/user.controller';
import { userService } from './user/user.service';
import { VerificaTokenMiddleware } from './verifica-token/verifica-token.middleware';

@Module({
  controllers: [AppController, userController],
  providers: [AppService, userService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VerificaTokenMiddleware).forRoutes("user")
  }
}
