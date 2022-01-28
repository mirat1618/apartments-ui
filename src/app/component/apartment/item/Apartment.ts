export class Apartment {
    public id : number;
    public number : number;
    public floor : number;
    public numberOfBedrooms : number;
    public rentPrice : number;
    public squareMeters : number;

    constructor(id : number, number : number, floor : number, numberOfBedrooms : number, rentPrice : number, squareMeters : number) {
        this.id = id;
        this.number = number;
        this.floor = floor;
        this.squareMeters = squareMeters;
        this.numberOfBedrooms = numberOfBedrooms;
        this.rentPrice = rentPrice;
        this.squareMeters = squareMeters;
    }
}