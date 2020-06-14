import { Controller, Post, Body, Get, ValidationPipe, UseInterceptors, ClassSerializerInterceptor } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { SelfRegisterEmployeeDTO, FinalizationOfRegistrationDTO } from './dto/employee.dto';
import { TransformInterceptor } from 'src/common/transform.interceptor';

@Controller('employee')
export class EmployeeController {

    constructor(
        private employeeService: EmployeeService
    ) { }
    
    @Post('create')
    @UseInterceptors(ClassSerializerInterceptor)
    async createEmployee(@Body() employeeData: SelfRegisterEmployeeDTO): Promise<any> {
    //async createEmployee(@Body(new ValidationPipe()) employeeData: SelfRegisterEmployeeDTO): Promise<any> {
        
        return this.employeeService.createEmployee(employeeData);


        /*
        return new SelfRegisterEmployeeDTO({
            firstName: employeeData.firstName,
            lastName: employeeData.lastName,
            email: employeeData.email
        });
        */
    }

    @Post('finalize')
    //@UseInterceptors(ClassSerializerInterceptor)
    async finalizeEmployee(@Body(new ValidationPipe()) employeeData: FinalizationOfRegistrationDTO): Promise<any> {
        
        

    }


}
