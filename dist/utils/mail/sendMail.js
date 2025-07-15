"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.BREVO_EMAIL,
        pass: process.env.BREVO_SMTP_KEY,
    },
});
const sendEmail = async ({ to, subject, text, html, }) => {
    try {
        await transporter.sendMail({
            from: "admin@encoreaitools.com",
            to,
            subject,
            text,
            html,
        });
    }
    catch (error) {
        console.error("❌ Failed to send email:", error);
        throw new Error("Email sending failed");
    }
};
exports.sendEmail = sendEmail;
