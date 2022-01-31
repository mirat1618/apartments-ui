import { Apartment } from "src/app/component/apartment/model/Apartment";

export class ApartmentComplex {

    public id : number;
    public title : string;
    public imageUrl : string;
    public address : string;
    public apartments : Apartment[];

    constructor(id: number, title : string, imageUrl : string, address : string, apartments : Apartment[]) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.address = address;
        this.apartments = apartments;
    }
}