import { uuid } from 'uuidv4';

export type Insutable = Record<string, Insurancer>;

export type Insurancer = {
    id:string;
    Fullname: string;
    Profession: string;
    mobile: string;
};

export const INSU_ID_1 = uuid();
export const INSU_ID_2 = uuid();
export const INSU_ID_3= uuid();

export const INSURANCES: Insutable = {
  
    [INSU_ID_1]: {
        id:INSU_ID_1,
    Fullname: "John",
    Profession: "IT",
    mobile:"4444442562"
  },
  [INSU_ID_2]: {
    id:INSU_ID_1,
    Fullname: "John",
    Profession: "IT",
    mobile:"4444442562"
  },
  [INSU_ID_3]: {
    id:INSU_ID_1,
    Fullname: "John",
    Profession: "IT",
    mobile:"4444442562"
  },
};
