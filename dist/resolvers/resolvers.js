"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
//import { QueryResolvers } from '../generated/graphql';
//import { MutationResolvers } from '../generated/graphql';
const { insuranceResolvers } = require('./insurance_resolvers');
//
exports.resolvers = {
    Insurance: insuranceResolvers
};
//# sourceMappingURL=resolvers.js.map