import next from "next"
import Link from "next/link"
import { resolve } from "styled-jsx/css"

// const getTickets = async () => {
//     const res = await fetch('http://localhost:4000/tickets', {
//         next: {
//             revalidate: 0
//         }
//     }
//     )

//     return res.json()
// }
const getTickets = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/tickets', {
            cache: "no-store"
        }
        )
        console.log(res);
        return res.json();

    } catch (error) {
        console.log(error);
    }

}

export default async function TicketsList() {
    const { tickets } = await getTickets();
    return (
        <>
            {tickets.map((ticket) => (
                <div key={ticket._id} className='card my-5'>
                    <Link href={`/tickets/${ticket._id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>

                </div>
            ))}
            {tickets.length === 0 && (
                <p className='text-center'>there are no open tickets,yay!</p>
            )}
        </>
    )
}


