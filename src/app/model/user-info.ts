export interface UserInfo {
  id: number;
  name: string;
  email: string;
  dob: string;
  address: Address;
}

interface Address {
  streetName: string;
  complement: string;
  number: number;
  city: string;
  zipCode: string;
}
