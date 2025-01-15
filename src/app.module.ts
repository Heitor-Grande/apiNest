import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { userModule } from './user/user.module';
import { AppController } from './app.controller';

@Module({
  imports: [userModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
