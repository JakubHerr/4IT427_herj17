import {useState} from "react";
import {useWatchlist} from "@/hooks/useWatchList.ts";

export function AddFilmForm() {
    const { addFilm } = useWatchlist()

    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [genre, setGenre] = useState("")
    const [rating, setRating] = useState("")

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();

                addFilm({
                    id: crypto.randomUUID(),
                    title,
                    year: Number(year),
                    genre,
                    rating: Number(rating),
                    watched: false,
                })

                setTitle("")
                setYear("")
                setGenre("")
                setRating("")
            }}>
                <h2>Pridat film</h2>
                <input type={"text"} required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type={"text"} required value={year} onChange={(e) => setYear(e.target.value)}/>
                <input type={"text"} required value={genre} onChange={(e) => setGenre(e.target.value)}/>
                <input type={"text"} required value={rating} onChange={(e) => setRating(e.target.value)}/>
                <button type="submit">Přidat film</button>
            </form>
        </>
    )
}