import { Injectable } from '@nestjs/common';
import { Sprint } from "src/interfaces/sprints";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SprintsService {

	constructor(@InjectModel('Sprint') private sprintModelo: Model<Sprint>) {}

	async obtenerSprints(){
		return await this.sprintModelo.find();
	}
}
