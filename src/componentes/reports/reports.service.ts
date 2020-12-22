import { Injectable } from '@nestjs/common';
import { Sprint } from "src/interfaces/sprints";
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { SmellTypeInterface } from "src/interfaces/smell_type";
import { SmellSubTypeInterface } from "src/interfaces/smell_sub_type";

@Injectable()
export class SprintsService {

	constructor(
		@InjectModel('Smell_Type') private sprintModelo: Model<SmellTypeInterface>,
		@InjectModel('SmellSubType') private smellSubTypeModel: Model<SmellSubTypeInterface>
	) {}

	async reportBySmellType(){
		return {'HOLA': 'MUNDo'}
		// return await this.sprintModelo.find();
	}

}
