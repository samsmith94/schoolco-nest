import { Injectable } from '@nestjs/common';

import { Employee } from "./entity/employee.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { SelfRegisterEmployeeDTO } from './dto/employee.dto';
import { SelfRegisterEmployeeDTOToEmployee, EmployeeToSelfRegisterEmployeeDTOConverter } from './utils/employee.converter';

@Injectable()
export class EmployeeService {

    constructor(
        @InjectRepository(Employee) private employeeRepository: Repository<Employee>,

        private selfRegisterEmployeeDTOToEmployeeConvertionService: SelfRegisterEmployeeDTOToEmployee,
        private employeeToSelfRegisterEmployeeDTOConverterConvertionService: EmployeeToSelfRegisterEmployeeDTOConverter,
    ) { }

    async findAll(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    async create(employee: Employee): Promise<Employee> {
        return await this.employeeRepository.save(employee);
    }

    async update(employee: Employee): Promise<UpdateResult> {
        return await this.employeeRepository.update(employee.id, employee);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.employeeRepository.delete(id);
    }





    //helyes visszaadni a kapott dto-t?
    async createEmployee(employeeDto: SelfRegisterEmployeeDTO): Promise<SelfRegisterEmployeeDTO> {
        
        const employee: Employee = this.selfRegisterEmployeeDTOToEmployeeConvertionService.convert(employeeDto);
        const resultDto = await this.employeeRepository.save(employee);

        return this.employeeToSelfRegisterEmployeeDTOConverterConvertionService.convert(resultDto);
    }
}
