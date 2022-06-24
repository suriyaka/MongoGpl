"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
//import { InsuranceRouter } from "./routes/Insurancerounters";
//import { makeExecutableSchema } from '@graphql-tools/schema'
const fs_1 = require("fs");
const path_1 = require("path");
const { resolvers } = require('./src/resolvers/resolvers');
const client_1 = require("./db/client");
const typeDefs = apollo_server_express_1.gql(fs_1.readFileSync(path_1.join(__dirname, '..', 'schema.graphql'), 'utf-8'));
//  //const { typeDefs } = require('./src/schema/schema');
//  //const {resolvers } = require('./src/resolvers/resolvers');
//  export const typeDefs = gql`
// type Query 
// {
//     getInsurance: [Insurance!]!
//     getaccounts:[Account!]!
// }
// type Mutation {
// createInsurance(Fullname: String!, Profession:String!, mobile:Int!): Insurance!
// createaccount(Companyname:String!,Salary:Int!,address:String!): Account!
// }
// type Insurance 
// {
//   Fullname: String!,
//   Profession:String!
//   mobile: Int!
// }
// type Account{
//  Companyname:String!
//  Salary:Int!
//  address:String!
// }
// `;
// const resolvers = {
//     Query: {
//          getInsurance: async(_parent:any, {}, context:any, _info:any) =>{
//           const insurances= await context.db.findOne();
//           return insurances;
//        }
//     }};
// export const schema = makeExecutableSchema({
//       typeDefs,
//       resolvers
//     })
// const rootResolveFunction = (parent:any, args:any, context:any, info:any) => {
//         //perform action before any other resolvers
//       };
//      // addSchemaLevelResolveFunction(schema,rootResolveFunction)
// //const app = express();
// //app.set('port', (5050));
// const port = 5050; 
// const server = new ApolloServer({schema});
const port = 5050;
const server = new apollo_server_express_1.ApolloServer({
    typeDefs,
    resolvers,
    context: {
        dbClient: new client_1.DbClient(),
    },
    introspection: true,
    /*playground: true*/
});
const app = express_1.default();
server.applyMiddleware({ app, cors: true });
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
// return app;
// connectToDatabase()
//     .then(() => {
//         const app = express();
//         app.use("/insurance", InsuranceRouter);
//         app.listen(port, () => {
//             console.log(`Server started at http://localhost:${port}`);
//         });
//     })
//     .catch((error: Error) => {
//         console.error("Database connection failed", error);
//         process.exit();
//     });
//# sourceMappingURL=index.js.map