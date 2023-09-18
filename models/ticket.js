import mongoose, { Schema } from "mongoose";

const ticketSchema = new Schema(
    {
        title: String,
        body: String,
        priority: String,
    }
);

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;