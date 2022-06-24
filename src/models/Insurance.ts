import { ObjectId } from "mongodb";

export default class Insurance {
    constructor(public name: string, public mobile: number, public profession: string, public id?: ObjectId) {}
};