"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const { gql } = require('apollo-server');
exports.typeDefs = gql `
type Query 
{
    getInsurance: [Insurance!]!
    getaccounts:[Account!]!
}

type Mutation {
createInsurance(Fullname: String!, Profession:String!, mobile:Int!): Insurance!
createaccount(Companyname:String!,Salary:Int!,address:String!): Account!
}

type Insurance 
{
  Fullname: String!,
  Profession:String!
  mobile: Int!
}

type Account{
 Companyname:String!
 Salary:Int!
 address:String!
}
`;
//# sourceMappingURL=schema.js.map