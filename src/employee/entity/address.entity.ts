import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Address {
    
    @PrimaryGeneratedColumn()
    id: number;

    country: string;
    postalCode: string;             //kerület: district?

    //köztér típusa (enum?) ?

    city: string;
    streetAddressNumber: string;
    specificInformation: string;    //emelet, ajtó, egyéb??
}