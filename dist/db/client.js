"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbClient = void 0;
const insurance_1 = require("./insurance");
const { fakeAsync } = require('./utils');
class DbClient {
    getInsurances(args) {
        return fakeAsync(() => args && args.id
            ? Object.values(insurance_1.INSURANCES).filter(({ id }) => id === args.id)
            : Object.values(insurance_1.INSURANCES));
    }
}
exports.DbClient = DbClient;
//# sourceMappingURL=client.js.map