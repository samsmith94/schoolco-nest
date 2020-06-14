import { Injectable } from '@nestjs/common';

import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobService {

    constructor(
        @InjectRepository(Job) private jobRepository: Repository<Job>
    ) { }

    async findAll(): Promise<Job[]> {
        return await this.jobRepository.find();
    }

    async create(job: Job): Promise<Job> {
        return await this.jobRepository.save(job);
    }

    async update(job: Job): Promise<UpdateResult> {
        return await this.jobRepository.update(job.id, job);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.jobRepository.delete(id);
    }
}
