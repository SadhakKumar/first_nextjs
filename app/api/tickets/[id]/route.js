import connectMongoDB from "@/lib/mongodb";
import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const id = params.id;
    await connectMongoDB();
    const ticket = await Ticket.findById(id);

    if (!ticket) {
        return NextResponse.error("Ticket not found", { status: 404 });
    }

    return NextResponse.json(ticket);
}
