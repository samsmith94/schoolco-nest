import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Employee } from "./entity/employee.entity";
import { EmployeeToSelfRegisterEmployeeDTOConverter, SelfRegisterEmployeeDTOToEmployee } from './utils/employee.converter';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
  ],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeToSelfRegisterEmployeeDTOConverter, SelfRegisterEmployeeDTOToEmployee]
})
export class EmployeeModule {}
