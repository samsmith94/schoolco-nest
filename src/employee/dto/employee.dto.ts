import { IsEmail, IsMobilePhone, IsEnum, Length, IsDate, IsNotEmpty, IsBoolean, IsDefined } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

import { Gender } from "../entity/employee.entity";
import { Exclude, Expose } from "class-transformer";

//@Exclude()
export class SelfRegisterEmployeeDTO {

    @Exclude({ toPlainOnly: true })
    @IsDefined()
    firstName: string;

    @Exclude({ toPlainOnly: true })
    @IsDefined()
    lastName: string;

    /*
    @IsDefined()
    @IsDate()
    dateOfBirth: Date;
    */

    
    @IsDefined()
    @IsEmail()
    @Expose()
    email: string;

    
    @Expose()
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    /*
    @IsDefined()
    @IsMobilePhone('hu-HU')
    phoneNumber: string;

    @IsDefined()
    @IsEnum(Gender)
    gender: Gender;
    
    @Exclude()
    @IsDefined()
    @Length(10, 30)
    password: string;

    @IsDefined()
    @IsBoolean()
    newsletter: boolean;
    */

    constructor(partial: Partial<SelfRegisterEmployeeDTO>) {
        Object.assign(this, partial);
    }
    
}

export class FinalizationOfRegistrationDTO {
    
}