import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/db.service";
import Insurance from "../models/Insurance";

export const InsuranceRouter = express.Router();

InsuranceRouter.use(express.json());

InsuranceRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const insurs = (await collections.insurance.find({}).toArray()) as unknown as Insurance[];

        res.status(200).send(insurs);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

InsuranceRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const insu = (await collections.insurance.findOne(query)) as unknown as Insurance;

        if (insu) {
            res.status(200).send(insu);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});

InsuranceRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newins = req.body as Insurance;
        const result = await collections.insurance.insertOne(newins);

        result
            ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new game.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});


InsuranceRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedinsu: Insurance = req.body as Insurance;
        const query = { _id: new ObjectId(id) };
      
        const result = await collections.insurance.updateOne(query, { $set: updatedinsu });

        result
            ? res.status(200).send(`Successfully updated game with id ${id}`)
            : res.status(304).send(`Game with id: ${id} not updated`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

InsuranceRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.insurance.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed game with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove game with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Game with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});




