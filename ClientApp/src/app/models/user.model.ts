export class User {
    id = 0;
    firstName = '';
    lastName ='';
    age = 18;
    dateOfBirth: Date | undefined;
    email = '';
    address = new  UserAddress();
}

export class UserAddress {
    street = '';
    postalCode = '';
    city = '';
    country = '';
}
