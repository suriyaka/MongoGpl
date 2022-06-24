"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceRouter = void 0;
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const db_service_1 = require("../services/db.service");
exports.InsuranceRouter = express_1.default.Router();
exports.InsuranceRouter.use(express_1.default.json());
exports.InsuranceRouter.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const insurs = (yield db_service_1.collections.insurance.find({}).toArray());
        res.status(200).send(insurs);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
exports.InsuranceRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const insu = (yield db_service_1.collections.insurance.findOne(query));
        if (insu) {
            res.status(200).send(insu);
        }
    }
    catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
}));
exports.InsuranceRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newins = req.body;
        const result = yield db_service_1.collections.insurance.insertOne(newins);
        result
            ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new game.");
    }
    catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
}));
exports.InsuranceRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = (_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id;
    try {
        const updatedinsu = req.body;
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield db_service_1.collections.insurance.updateOne(query, { $set: updatedinsu });
        result
            ? res.status(200).send(`Successfully updated game with id ${id}`)
            : res.status(304).send(`Game with id: ${id} not updated`);
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
exports.InsuranceRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const id = (_c = req === null || req === void 0 ? void 0 : req.params) === null || _c === void 0 ? void 0 : _c.id;
    try {
        const query = { _id: new mongodb_1.ObjectId(id) };
        const result = yield db_service_1.collections.insurance.deleteOne(query);
        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed game with id ${id}`);
        }
        else if (!result) {
            res.status(400).send(`Failed to remove game with id ${id}`);
        }
        else if (!result.deletedCount) {
            res.status(404).send(`Game with id ${id} does not exist`);
        }
    }
    catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
}));
//# sourceMappingURL=Insurancerounters.js.map