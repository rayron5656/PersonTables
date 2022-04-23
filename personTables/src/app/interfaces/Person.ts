export interface Person{
    address:Address;
    id:number;
    email:string;
    username:string;
    password:string;
    name:Name;
    phone:string;
    __v:number;

}

interface Address{
    geolocation:Geolocation;
    city:string;
    street:string;
    number:number;
    zipcode:string;
}

interface Geolocation{
    lat:number;
    long:number;
}
interface Name{
    firstname:string;
    lastname:string;
}

