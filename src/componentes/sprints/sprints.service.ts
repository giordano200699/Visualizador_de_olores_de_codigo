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

	async reportCumulativeFrequency(){
		var sprints = await this.sprintModelo.find();
		var labels = []
		var values = []
		var suma = 0
		for (let sprint of sprints) {
		  labels.push(sprint.name);
		  suma = suma + sprint.n_smells_to_solve
		  values.push(suma);
		}
		return {
		  'labels': labels,
		  'datasets': [
		    values
		  ]
		}
	}

	async reportBySprint(){
		var sprints = await this.sprintModelo.find();
		var labels = []
		var to_solve = []
		var solved = []
		for (let sprint of sprints) {
		  labels.push(sprint.name);
		  to_solve.push(sprint.n_smells_to_solve)
		  solved.push(sprint.n_smells_solved)
		}
		return {
		  'labels': labels,
		  'datasets': [
		    {
		    	'label': 'Resueltos',
		    	'data': solved
		    },
		    {
		    	'label': 'Por resolver',
		    	'data': to_solve
		    }
		  ]
		}
	}
}
