import { Moment } from 'moment';

interface IPerson {
  firstName: string;
  lastName: string;
  middleName: string;
  dateOfBirth: Moment;
  post: string;
  linkToPhoto: URL;
}

export default IPerson;
