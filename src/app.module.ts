import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { userController } from './user/user.controller';
import { userService } from './user/user.service';

@Module({
  controllers: [AppController, userController],
  providers: [AppService, userService],
})
export class AppModule {

}
