import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SprintsController } from "./sprints.controller";
import { SprintsService } from "./sprints.service";
import { SprintSchema } from './../../esquemas/sprint.schema';


import { SmellSubTypeSchema } from './../../esquemas/smell_sub_type.schema';

@Module({
	imports: [MongooseModule.forFeature(
		[
			{ name: 'Sprint', schema: SprintSchema },
			{ name: 'SmellSubType', schema: SmellSubTypeSchema }
		]
	)],
	controllers: [SprintsController],
	providers: [SprintsService]
})
export class SprintsModule {}
