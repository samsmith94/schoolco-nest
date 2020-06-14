import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

import { Address } from "./address.entity";

export enum Gender {
    Male,
    Female,
    Other
}

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    /*
    @Column()
    //@Column("date")
    dateOfBirth: Date;
    */

    @Column()
    email: string;

    /*
    @Column()
    phoneNumber: string;

    @Column("int")
    gender: Gender;
    
    @Column()
    password: string;

    @Column("boolean")
    newsletter: boolean;

    //************************************
    //további adatok (regusztráció véglegesítése után)

    birthName: string;
    placeOfBirth: string;
    mothersName: string;
    citizenship: string;
    taxIdentificationNumber: string;
    socialSecurityIDNumber: string;
    studentCard: string;

    permanentAddress: Address;
    placeOfResidence: Address;

    driverLicence: string;
    bankAccountNumber: string;

    */

}