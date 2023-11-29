export interface user {
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    address: string;
    type: UserType;
}

export enum UserType{
    CUSTOMER = "customer",
    DELIVERER = "deliverer"
}



export interface Position {
    x: number;
    y: number;
}

export interface Item {
    name: string;
    description: string;
    price: number;
    quantity: number;
}

