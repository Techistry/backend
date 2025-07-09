"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    message: { type: String, required: true },
    rating: { type: Number, required: true },
    deleted: { type: Boolean, default: false },
    approved: { type: Boolean, default: false },
    toolId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "AI_Tool",
        required: true,
    },
    categoryId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
}, { timestamps: true });
const Review = mongoose_1.default.model("Review", reviewSchema);
exports.default = Review;
