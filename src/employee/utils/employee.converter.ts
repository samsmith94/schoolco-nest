import { Convert, Converter } from '@fabio.formosa/metamorphosis';
import { Employee } from '../entity/employee.entity';
import { SelfRegisterEmployeeDTO } from '../dto/employee.dto';
import { Injectable } from '@nestjs/common';
import { EmployeeService } from '../employee.service';

@Injectable()
@Convert(Employee, SelfRegisterEmployeeDTO)
class EmployeeToSelfRegisterEmployeeDTOConverter implements Converter<Employee, SelfRegisterEmployeeDTO> {
    public convert(source: Employee): SelfRegisterEmployeeDTO {
        const target = new SelfRegisterEmployeeDTO({});
        target.firstName = source.firstName;
        target.lastName = source.lastName;
        target.email = source.email;
        return target;
    }
}


@Injectable()
@Convert(SelfRegisterEmployeeDTO, Employee)
class SelfRegisterEmployeeDTOToEmployee implements Converter<SelfRegisterEmployeeDTO, Employee> {
    public convert(source: SelfRegisterEmployeeDTO): Employee {
        const target = new Employee();

        target.firstName = source.firstName;
        target.lastName = source.lastName;
        target.email = source.email;
        
        return target;
    }
}

export {
    EmployeeToSelfRegisterEmployeeDTOConverter,
    SelfRegisterEmployeeDTOToEmployee
}