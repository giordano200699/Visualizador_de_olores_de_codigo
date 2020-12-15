import { Controller, Get, Post, Put, Delete, Body,Param,Req } from '@nestjs/common';
import { SprintsService } from "./sprints.service";
import { Sprint } from "src/interfaces/sprints";
import { Request } from 'express';

@Controller('sprints')
export class SprintsController {

	constructor(private sprintsService: SprintsService){}
	
	@Get()
	obtenerSprints(@Req() request: Request){
		return this.sprintsService.obtenerSprints();
	}
}