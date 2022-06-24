"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.INSURANCES = exports.INSU_ID_3 = exports.INSU_ID_2 = exports.INSU_ID_1 = void 0;
const uuidv4_1 = require("uuidv4");
exports.INSU_ID_1 = uuidv4_1.uuid();
exports.INSU_ID_2 = uuidv4_1.uuid();
exports.INSU_ID_3 = uuidv4_1.uuid();
exports.INSURANCES = {
    [exports.INSU_ID_1]: {
        id: exports.INSU_ID_1,
        Fullname: "John",
        Profession: "IT",
        mobile: "4444442562"
    },
    [exports.INSU_ID_2]: {
        id: exports.INSU_ID_1,
        Fullname: "John",
        Profession: "IT",
        mobile: "4444442562"
    },
    [exports.INSU_ID_3]: {
        id: exports.INSU_ID_1,
        Fullname: "John",
        Profession: "IT",
        mobile: "4444442562"
    },
};
//# sourceMappingURL=insurance.js.map