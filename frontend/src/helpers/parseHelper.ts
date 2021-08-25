import moment from 'moment';
import IPerson from '@/types/IPerson';
import IRemotePerson from '@/types/IRemotePerson';

const parseListOfRemotePersons = (fetchingPersons: IRemotePerson[]): IPerson[] => {
  return fetchingPersons
    .map((person) => ({
      ...person,
      dateOfBirth: moment(person.dateOfBirth),
      linkToPhoto: new URL(person.linkToPhoto),
    }));
}

export default {
  parseListOfRemotePersons,
};

