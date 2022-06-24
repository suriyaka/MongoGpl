import { INSURANCES, Insurancer } from './insurance';
import { uuid } from 'uuidv4';
const  { fakeAsync } = require('./utils');

export class DbClient {
  getInsurances(args?: { id?: string }): Promise<Insurancer[]> {
    return fakeAsync(() =>
      args && args.id
        ? Object.values(INSURANCES).filter(
            ({ id }) => id === args.id,
          )
        : Object.values(INSURANCES),
    );
  }}
