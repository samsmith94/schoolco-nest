import { Controller, Get, Post, Body } from '@nestjs/common';

import {JobService} from './job.service';
import {Job} from './job.entity';

@Controller('job')
export class JobController {

    constructor(
        private jobService: JobService
    ) { }
    
    @Get()
    index(): Promise<Job[]> {
        return this.jobService.findAll();
    }

    @Post('create')
    async create(@Body() jobData: Job): Promise<any> {
        return this.jobService.create(jobData);
    }
}
