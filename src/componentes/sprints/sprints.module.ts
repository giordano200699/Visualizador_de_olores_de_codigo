import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SprintsController } from "./sprints.controller";
import { SprintsService } from "./sprints.service";
import { SprintSchema } from './../../esquemas/sprint.schema';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Sprint', schema: SprintSchema }])],
	controllers: [SprintsController],
	providers: [SprintsService]
})
export class SprintsModule {}
