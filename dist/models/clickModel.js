"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const visitSchema = new mongoose_1.default.Schema({
    toolId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "AI_Tool",
        required: true,
    },
}, { timestamps: true });
const Visit = mongoose_1.default.model("visit", visitSchema);
exports.default = Visit;
