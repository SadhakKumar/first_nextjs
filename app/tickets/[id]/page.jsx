'use client'
import Error from "next/error"
export async function generateStaticParams() {
    const res = await fetch('http://localhost:3000/api/tickets')
    const { tickets } = await res.json()
    return tickets.map((ticket) => ({
        id: ticket._id
    }))
}

const getTicket = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            cache: "no-store"
        });
        if (!res.ok) {
            throw new Error("Failed to fetch ticket");
        }
        return res.json();
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error
    }
};

export default async function TicketDetails({ params }) {
    const { id } = params;
    const ticket = await getTicket(id);
    return (
        <main>
            <nav>
                <h2>TicketDetails</h2>
            </nav>
            <div className='card'>
                <h3>{ticket.title}</h3>
                {/* <small>Created by {ticket.user_email}</small> */}
                <small>Created by Sadhak Kumar</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
