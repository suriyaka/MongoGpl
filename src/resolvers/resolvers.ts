import { Resolvers } from '../generated/graphql';
//import { QueryResolvers } from '../generated/graphql';
//import { MutationResolvers } from '../generated/graphql';
const { insuranceResolvers } = require('./insurance_resolvers');
//
export const resolvers: Resolvers = {
  Insurance: insuranceResolvers
};
