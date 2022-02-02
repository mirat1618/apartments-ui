import { ApartmentComplex } from "../../apartment-complex/model/ApartmentComplex";

export class Apartment {
    public id: number;
    public number: number;
    public floor: number;
    public numberOfBedrooms: number;
    public hasWashingMachine: boolean;
    public hasDishwasher: boolean;
    public squareMeters: number;
    public rentPrice: number;
    public apartmentComplex: number;

    
    constructor(id: number, number: number, floor: number, numberOfBedrooms: number, hasWashingMachine: boolean, hasDishwasher: boolean, squareMeters: number, rentPrice: number, apartmentComplex: number) {
        this.id = id;
        this.number = number;
        this.floor = floor;
        this.squareMeters = squareMeters;
        this.numberOfBedrooms = numberOfBedrooms;
        this.hasWashingMachine = hasWashingMachine;
        this.hasDishwasher = hasDishwasher;
        this.squareMeters = squareMeters;
        this.rentPrice = rentPrice;
        this.apartmentComplex = apartmentComplex;
    }
}