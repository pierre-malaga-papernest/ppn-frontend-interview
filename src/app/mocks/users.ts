import { User } from "@interfaces/user";

export const usersMock: User[] = [
  {
    id: 987,
    name: 'James Anderson',
    email: 'james.anderson@example.com',
    dob: '1990-11-05',
    address: {
      street_name: 'Oak Drive',
      complement: 'Apt 102',
      number: 123,
      city: 'Silver City',
      zip_code: '99234'
    }
  },
  {
    id: 551,
    name: 'Jessica Lee',
    email: 'jessica.lee@example.org',
    dob: '1985-07-21',
    address: {
      street_name: 'Pine Valley',
      complement: 'Unit 204',
      number: 849,
      city: 'Lakewood',
      zip_code: '77456'
    }
  }
]