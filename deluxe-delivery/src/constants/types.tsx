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


