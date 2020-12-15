import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SprintsModule } from './componentes/sprints/sprints.module';
// import { info } from 'env.js'

var info = {
	'DATABASE_ROOT': 'mongodb+srv://giordano:waldo@cluster0-p2txm.mongodb.net/BackendOloresCodigo?retryWrites=true'
}

@Module({
  imports: [MongooseModule.forRoot(info.DATABASE_ROOT,{useNewUrlParser: true}),
  SprintsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

