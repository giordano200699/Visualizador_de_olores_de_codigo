import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SprintsModule } from './componentes/sprints/sprints.module';
import { info } from 'env.js'

@Module({
  imports: [MongooseModule.forRoot(info.DATABASE_ROOT,{useNewUrlParser: true}),
  SprintsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

