import { UserInfo } from '@model/user-info';

export const mockUserInfo: UserInfo = {
  id: 1,
  name: 'Nathan Drake',
  email: 'nathan@drake.co',
  dob: '1980-07-19',
  address: {
    streetName: '1234 Uncharted St',
    complement: 'Apt 101',
    number: 1234,
    city: 'Los Angeles',
    zipCode: '90001',
  },
};
