import connectMongoDB from "@/lib/mongodb";
import Ticket from "@/models/ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { title, body, priority } = await req.json();

    await connectMongoDB();
    await Ticket.create({ title, body, priority });

    return NextResponse.json({ message: "ticket created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets });
}
