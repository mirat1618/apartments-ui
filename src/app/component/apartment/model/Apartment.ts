export class Apartment {
    public id : number;
    public number : number;
    public floor : number;
    public numberOfBedrooms : number;
    public squareMeters : number;
    public rentPrice : number;
    
    constructor(id : number, number : number, floor : number, numberOfBedrooms : number, squareMeters : number, rentPrice : number) {
        this.id = id;
        this.number = number;
        this.floor = floor;
        this.squareMeters = squareMeters;
        this.numberOfBedrooms = numberOfBedrooms;
        this.squareMeters = squareMeters;
        this.rentPrice = rentPrice;
    }
}