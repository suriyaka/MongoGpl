import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { insurance?: mongoDB.Collection } = {}

export async function connectToDatabase () {
    
    dotenv.config();
 
    //const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
      
    const url = "mongodb://localhost:27017";
      
    const client = await mongoDB.MongoClient.connect(url);
        
    const db: mongoDB.Db = client.db("Insurance");
   
    const insuCollection: mongoDB.Collection = db.collection("details");
 
    collections.insurance = insuCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${insuCollection.collectionName}`);

    const findResult =await collections.insurance.find({}).toArray();
    console.log('Found documents =>', findResult);

 }